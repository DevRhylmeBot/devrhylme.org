import { useState } from "react";
import { X } from "lucide-react";
import { registerForEvent, checkIfRegistered, updateEventAttendeeCount } from "@/lib/firebase/services";
import { Event } from "@/lib/firebase/services";

interface RegistrationModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

// Helper: Save registration to localStorage (7 days cache)
const saveRegistrationToCache = (eventId: string, email: string) => {
  const cacheKey = `registered_${eventId}_${email}`;
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);
  
  localStorage.setItem(cacheKey, JSON.stringify({
    registered: true,
    expiryDate: expiryDate.toISOString(),
  }));
};

// Helper: Check if registration is cached
const isRegistrationCached = (eventId: string, email: string): boolean => {
  const cacheKey = `registered_${eventId}_${email}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (!cached) return false;
  
  try {
    const data = JSON.parse(cached);
    const expiryDate = new Date(data.expiryDate);
    
    if (new Date() > expiryDate) {
      localStorage.removeItem(cacheKey);
      return false;
    }
    
    return data.registered;
  } catch (error) {
    return false;
  }
};

export default function RegistrationModal({
  event,
  isOpen,
  onClose,
  onSuccess,
}: RegistrationModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "student" as "student" | "professional",
    phone: "",
    company: "",
    college: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate form
      if (!formData.name || !formData.email) {
        setError("Name and email are required");
        setLoading(false);
        return;
      }

      // Check cache first (faster)
      if (isRegistrationCached(event.id, formData.email)) {
        setError("You are already registered for this event");
        setLoading(false);
        return;
      }

      // Check if already registered in Firestore
      const isRegistered = await checkIfRegistered(event.id, formData.email);
      if (isRegistered) {
        setError("You are already registered for this event");
        saveRegistrationToCache(event.id, formData.email);
        setLoading(false);
        return;
      }

      // Build registration data
      const registrationData: any = {
        eventId: event.id,
        name: formData.name,
        email: formData.email,
        userType: formData.userType,
      };

      // Add optional phone
      if (formData.phone.trim()) {
        registrationData.phone = formData.phone;
      }

      // Add conditional fields
      if (formData.userType === "professional" && formData.company.trim()) {
        registrationData.company = formData.company;
      } else if (formData.userType === "student" && formData.college.trim()) {
        registrationData.college = formData.college;
      }

      // Register user
      const result = await registerForEvent(registrationData);

      if (result.success) {
        // Save to cache
        saveRegistrationToCache(event.id, formData.email);
        
        // Update event attendee count (this will add 1 to existing count)
        await updateEventAttendeeCount(event.id);
        
        setSuccess(true);
        setTimeout(() => {
          onSuccess();
          onClose();
          setFormData({
            name: "",
            email: "",
            userType: "student",
            phone: "",
            company: "",
            college: "",
          });
          setSuccess(false);
        }, 2000);
      } else {
        setError("Failed to register. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Register Now</h2>
            <p className="text-sm text-gray-600 mt-1">{event.title}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-600">
                Check your email for confirmation details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* User Type */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  I am a *
                </label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              {/* College/Company */}
              {formData.userType === "student" ? (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    College/University
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Your college name"
                    className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors mt-6"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}