import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaWater, FaBoxOpen, FaTruck, FaStar,FaCheckCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-sky-500 text-white text-center py-12 shadow-lg">
        <h1 className="text-4xl font-bold tracking-wide">Hindustan Aqua</h1>
        <p className="text-sm opacity-90 mt-2">
          Pure Drinking Water Supplier
        </p>
      </div>

      {/* Hero Section */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-sky-200 to-blue-100">
        <h2 className="text-3xl font-semibold mb-3">
          Shuddh, Safe aur Fresh Drinking Water 💧
        </h2>
        <p className="text-sm mb-6 text-gray-600">
          250ML | 500ML | 1L Bottles Available
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:7355608237"
            className="flex items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/917355608237"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Products */}
      <div className="py-12 px-4 text-center max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">Our Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["250ML Bottle", "500ML Bottle", "1L Bottle"].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <FaCheckCircle className="text-blue-500 text-3xl mx-auto mb-3" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12 px-4 text-center max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">Why Choose Us</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: "Pure RO Water", icon: <FaWater /> },
            { text: "Hygienic Packing", icon: <FaBoxOpen /> },
            { text: "Fast Delivery", icon: <FaTruck /> },
            { text: "Best Quality", icon: <FaStar /> },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
            >
              <div className="text-blue-500 text-3xl mb-3 flex justify-center">
                {item.icon}
              </div>
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="py-12 px-4 max-w-lg mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">Contact</h3>

        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-3 text-sm">
          <p><strong>📞 Phone:</strong> 7355608237</p>
          <p><strong>📍 Address:</strong> Bankeypur Sultanpur Uttar Pradesh</p>
          <p><strong>🚚 Delivery:</strong> Only in Uttar Pradesh</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white text-center py-4 mt-6">
        © Hindustan Aqua
      </div>

    </div>
  );
};

export default Home;