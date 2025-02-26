
import { FaEnvelope, FaPhone, FaUser, FaCommentDots } from "react-icons/fa";


export default function Contact() {
  return (
    <>

      <main className="container mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
        <p className="mt-2 text-gray-700">Feel free to reach out for any inquiries or support.</p>

        {/* Contact Info */}
        <div className="mt-6 space-y-4">
          <p className="flex items-center justify-center space-x-2 text-lg">
            <FaEnvelope className="text-blue-400" />
            <a href="mailto:care@tri-angels.com.pk" className="text-blue-500 hover:underline">
              care@tri-angels.com.pk
            </a>
          </p>
          <p className="flex items-center justify-center space-x-2 text-lg">
            <FaPhone className="text-green-500" />
            <span>+92 021 111 874 111</span>
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-10 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700">Send Us a Message</h3>
          <form className="mt-4 space-y-4">
            <div className="flex items-center border p-2 rounded-md bg-white">
              <FaUser className="text-gray-500 mx-2" />
              <input type="text" placeholder="Your Name" className="w-full outline-none p-1" required />
            </div>

            <div className="flex items-center border p-2 rounded-md bg-white">
              <FaEnvelope className="text-gray-500 mx-2" />
              <input type="email" placeholder="Your Email" className="w-full outline-none p-1" required />
            </div>

            <div className="flex items-start border p-2 rounded-md bg-white">
  <FaCommentDots className="text-gray-500 mx-2 mt-1" />
  <textarea placeholder="Your Message" className="w-full outline-none p-1" rows={4} required></textarea>
</div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
