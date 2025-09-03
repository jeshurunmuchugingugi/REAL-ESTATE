import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, X } from "lucide-react";

interface TourBookingProps {
  propertyTitle?: string;
  propertyId?: string;
  onClose?: () => void;
}

const TourBooking = ({ propertyTitle, propertyId, onClose }: TourBookingProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    tourType: "in-person"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'd like to schedule a ${formData.tourType} tour for ${propertyTitle || 'a property'} on ${formData.date} at ${formData.time}. My contact: ${formData.name}, ${formData.phone}, ${formData.email}`;
    window.open(`https://wa.me/254792530530?text=${encodeURIComponent(message)}`, '_blank');
    onClose?.();
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-xl border max-w-md w-full">
      {onClose && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-slate-900">Schedule Tour</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      {propertyTitle && (
        <div className="mb-4 p-3 bg-amber-50 rounded-lg">
          <p className="text-sm text-amber-800 font-medium">{propertyTitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Full Name"
              className="pl-10"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Phone Number"
              className="pl-10"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
        </div>

        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />

        <Select value={formData.tourType} onValueChange={(value) => setFormData({...formData, tourType: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Tour Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in-person">In-Person Tour</SelectItem>
            <SelectItem value="video">Video Tour</SelectItem>
            <SelectItem value="virtual">Virtual Tour</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="date"
              className="pl-10"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">9:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="14:00">2:00 PM</SelectItem>
                <SelectItem value="15:00">3:00 PM</SelectItem>
                <SelectItem value="16:00">4:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
          Schedule Tour via WhatsApp
        </Button>
      </form>
    </div>
  );
};

export default TourBooking;