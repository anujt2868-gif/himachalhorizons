'use client';

import { useState } from 'react';

interface Package {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  highlights: string[];
}

export function PackageCard({ pkg }: { pkg: Package }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', travel_date: '', travelers: 1, message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          package_name: pkg.title,
          total_amount: pkg.price
        })
      });
      setSuccess(true);
      setShowForm(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-700 font-bold text-lg">{pkg.price}</span>
          <span className="text-gray-500">{pkg.duration}</span>
        </div>

        {success && (
          <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4">
            Booking request sent!
          </div>
        )}

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
          >
            Book Now
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 border rounded-lg text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 border rounded-lg text-sm"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              required
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full p-2 border rounded-lg text-sm"
            />
            <input
              type="date"
              required
              onChange={e => setFormData({...formData, travel_date: e.target.value})}
              className="w-full p-2 border rounded-lg text-sm"
            />
            <input
              type="number"
              placeholder="Number of Travelers"
              min={1}
              required
              onChange={e => setFormData({...formData, travelers: parseInt(e.target.value)})}
              className="w-full p-2 border rounded-lg text-sm"
            />
            <textarea
              placeholder="Special requests..."
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="w-full p-2 border rounded-lg text-sm"
              rows={2}
            />
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-green-700 text-white py-2 rounded-lg text-sm disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Confirm Booking'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}