import {
  collection,
  query,
  onSnapshot,
  addDoc,
  getDocs,
  where,
  Timestamp,
  orderBy,
  limit,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./config";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  dateTime?: Date; // For sorting
  location: string;
  type: string;
  status: string;
  capacity: number;
  attendeeCount: number;
  registeredCount?: number;
  image?: string;
  createdAt?: Date;
}

export interface Attendee {
  id: string;
  eventId: string;
  name: string;
  email: string;
  userType: "student" | "professional";
  phone?: string;
  company?: string;
  college?: string;
  registeredAt: Timestamp;
}

// Optimized: Fetch all events with attendee counts
export const subscribeToEvents = (callback: (events: Event[]) => void) => {
  const q = query(
    collection(db, "events"),
    orderBy("dateTime", "desc"),
    limit(100)
  );
  
  const unsubscribe = onSnapshot(
    q,
    async (snapshot) => {
      const events: Event[] = [];
      
      for (const doc of snapshot.docs) {
        const eventData = doc.data();
        
        // Get attendee count
        const attendeeCount = await getEventAttendees(doc.id);
        
        events.push({
          id: doc.id,
          ...eventData,
          attendeeCount: attendeeCount,
           } as Event);
      }
      
      callback(events);
    },
    (error) => {
      console.error("Error fetching events:", error);
      callback([]);
    }
  );

  return unsubscribe;
};

export async function createEvent(eventData: any) {
  try {
    // Ensure proper date format
    const dateTime = eventData.dateTime instanceof Date 
      ? eventData.dateTime 
      : new Date(eventData.dateTime);

    const eventsCollection = collection(db, "events");
    const docRef = await addDoc(eventsCollection, {
      ...eventData,
      dateTime: Timestamp.fromDate(dateTime),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

// Register attendee for an event
export const registerForEvent = async (attendeeData: Omit<Attendee, "id" | "registeredAt">) => {
  try {
    // Remove undefined and empty string fields
    const cleanData = Object.fromEntries(
      Object.entries(attendeeData).filter(([_, value]) => value !== undefined && value !== "")
    );

    const docRef = await addDoc(collection(db, "attendees"), {
      ...cleanData,
      registeredAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error registering:", error);
    return { success: false, error };
  }
};

// Check if user already registered for event
export const checkIfRegistered = async (eventId: string, email: string) => {
  try {
    const q = query(
      collection(db, "attendees"),
      where("eventId", "==", eventId),
      where("email", "==", email)
    );
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (error) {
    console.error("Error checking registration:", error);
    return false;
  }
};

// Get all attendees for an event
export const getEventAttendees = async (eventId: string) => {
  try {
    const q = query(
      collection(db, "attendees"),
      where("eventId", "==", eventId)
    );
    const snapshot = await getDocs(q);
    return snapshot.size;
  } catch (error) {
    console.error("Error fetching attendees:", error);
    return 0;
  }
};

// Update event registered count
export const updateEventAttendeeCount = async (eventId: string) => {
  try {
    const count = await getEventAttendees(eventId);
    const eventRef = doc(db, "events", eventId);
    
    // Get current event data to preserve existing registeredCount
    const eventDoc = await getDoc(eventRef);
    const currentData = eventDoc.data();
    const baseCount = currentData?.registeredCount || 0;
    
    // Add the new attendee count to the base count
    const totalCount = baseCount + count;
    
    await updateDoc(eventRef, {
      registeredCount: totalCount,
      attendeeCount: totalCount,
    });
    return totalCount;
  } catch (error) {
    console.error("Error updating attendee count:", error);
    return 0;
  }
};