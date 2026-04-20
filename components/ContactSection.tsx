'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Kuch galat hua!');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', destination: '', message: '' });

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with our travel experts"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

            {success && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                Message sent! We will contact you soon.
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="destination"
                placeholder="Destination e.g. Manali, Spiti"
                value={formData.destination}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-6 mt-8">
            <div className="flex items-center gap-4">
              <Phone className="text-green-700" />
              <span>+91 8628990980</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-green-700" />
              <span>anujt2868@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-green-700" />
              <span>Shimla, Himachal Pradesh</span>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="text-green-700" />
              <a 
                href="https://wa.me/918628990980"
                target="_blank"
                rel="noreferrer"
                className="text-green-700 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}