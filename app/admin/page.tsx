'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [activeTab, setActiveTab] = useState('bookings');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ADMIN_PASSWORD = 'himachal123';

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/api/bookings').then(r => r.json()).then(d => setBookings(d.data || []));
      fetch('/api/enquiries').then(r => r.json()).then(d => setEnquiries(d.data || []));
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button
            onClick={() => {
              if (password === ADMIN_PASSWORD) setIsLoggedIn(true);
              else alert('Wrong password!');
            }}
            className="w-full bg-green-700 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Himachal Horizons — Admin Panel</h1>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-2 rounded-lg ${activeTab === 'bookings' ? 'bg-green-700 text-white' : 'bg-white'}`}
          >
            Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-6 py-2 rounded-lg ${activeTab === 'enquiries' ? 'bg-green-700 text-white' : 'bg-white'}`}
          >
            Enquiries ({enquiries.length})
          </button>
        </div>

        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Package</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Travelers</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b: any) => (
                  <tr key={b.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{b.name}</td>
                    <td className="p-3">{b.phone}</td>
                    <td className="p-3">{b.package_name}</td>
                    <td className="p-3">{b.travel_date}</td>
                    <td className="p-3">{b.travelers}</td>
                    <td className="p-3">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Destination</th>
                  <th className="p-3 text-left">Message</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e: any) => (
                  <tr key={e.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{e.name}</td>
                    <td className="p-3">{e.phone}</td>
                    <td className="p-3">{e.email}</td>
                    <td className="p-3">{e.destination}</td>
                    <td className="p-3">{e.message}</td>
                    <td className="p-3">{new Date(e.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}