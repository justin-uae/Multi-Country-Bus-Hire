import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../common/input";
import { Label } from "../common/label";
import { Button } from "../common/button";
import { Textarea } from "../common/textarea";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [reasonForTravel, setReasonForTravel] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Thank you! We will get back to you soon.");
        form.reset();
        setReasonForTravel("");
        onSuccess?.();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xovpzode"
      method="POST"
      className="space-y-4"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Travel Request from Website"
      />

      {/* Reason for Travel */}
      <div className="space-y-2">
        <Label htmlFor="reason_for_travel" className="text-gray-800 font-medium text-sm">
          Reason For Travel <span className="text-red-500">*</span>
        </Label>
        <select
          id="reason_for_travel"
          name="reason_for_travel"
          required
          value={reasonForTravel}
          onChange={(e) => setReasonForTravel(e.target.value)}
          className="w-full h-10 bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 px-3 text-sm text-gray-700"
        >
          <option value="">Select travel purpose</option>
          <option value="For Company">For Company</option>
          <option value="For School">For School</option>
          <option value="For Leisure">For Leisure</option>
        </select>
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="firstname" className="text-gray-800 font-medium text-sm">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="firstname" 
            name="firstname" 
            required 
            className="h-10 bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 px-3 text-sm"
            placeholder="First name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastname" className="text-gray-800 font-medium text-sm">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="lastname" 
            name="lastname" 
            required 
            className="h-10 bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 px-3 text-sm"
            placeholder="Last name"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-800 font-medium text-sm">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="email" 
          type="email" 
          name="email" 
          required 
          className="h-10 bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 px-3 text-sm"
          placeholder="email@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gray-800 font-medium text-sm">
          Phone <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="phone" 
          type="tel" 
          name="phone" 
          required 
          className="h-10 bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 px-3 text-sm"
          placeholder="Phone number"
        />
      </div>

      {/* Company/School */}
      <div className="space-y-2">
        <Label htmlFor="company" className="text-gray-800 font-medium text-sm">
          Company/School <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="company" 
          name="company" 
          required 
          className="h-10 bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 px-3 text-sm"
          placeholder="Company or school"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-800 font-medium text-sm">
          Request Details
        </Label>
        <Textarea 
          id="message" 
          name="message" 
          rows={3} 
          className="bg-white border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none p-3 text-sm min-h-[80px]"
          placeholder="Tell us about your travel needs..."
        />
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        disabled={submitting}
        className="w-full h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow transition-all duration-200 disabled:opacity-50"
      >
        {submitting ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Processing...</span>
          </div>
        ) : (
          "Get Quote Now"
        )}
      </Button>
    </form>
  );
}