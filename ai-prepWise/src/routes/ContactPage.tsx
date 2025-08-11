// import  { useRef, useState, useEffect } from "react";
// import emailjs from "emailjs-com";

// export default function ContactPage() {
//   const formRef = useRef();
//   const [status, setStatus] = useState({ loading: false, success: null, error: null });
//   const [showToast, setShowToast] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, success: null, error: null });

//     emailjs
//       .sendForm(
//         "service_x241hol",   // Your EmailJS service ID
//         "template_icndtb2",  // Your EmailJS template ID
//         formRef.current,
//         "ug5EZBkxFXFKo-k-O"  // Your EmailJS public key
//       )
//       .then(
//         () => {
//           setStatus({ loading: false, success: "Message sent successfully!", error: null });
//           formRef.current.reset();
//           setShowToast(true);
//         },
//         (error) => {
//           console.error("EmailJS Error:", error);
//           setStatus({ loading: false, success: null, error: "Failed to send message. Please try again." });
//           setShowToast(true);
//         }
//       );
//   };

//   // Auto hide toast after 3 seconds
//   useEffect(() => {
//     if (showToast) {
//       const timer = setTimeout(() => setShowToast(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showToast]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white-200 px-4 relative">
//       {/* Toast Notification */}
//       {showToast && (
//         <div
//           className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white ${
//             status.success ? "bg-green-600" : "bg-red-600"
//           }`}
//           role="alert"
//         >
//           {status.success || status.error}
//         </div>
//       )}

//       <div className="bg-black p-8 rounded-lg shadow-lg max-w-lg w-full border border-gray-600">
//         <h1 className="text-3xl font-bold mb-4 text-center text-white">Contact Us</h1>

//         <p className="text-gray-300 mb-6 text-center">
//           If you have any query or want to suggest something to improve our app, your suggestions are welcome!
//         </p>

//         <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             required
//             rows="5"
//             className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           ></textarea>

//           <button
//             type="submit"
//             disabled={status.loading}
//             className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {status.loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

interface Status {
  loading: boolean;
  success: string | null;
  error: string | null;
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>({
    loading: false,
    success: null,
    error: null,
  });
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_x241hol", // Your EmailJS service ID
        "template_icndtb2", // Your EmailJS template ID
        formRef.current,
        "ug5EZBkxFXFKo-k-O" // Your EmailJS public key
      )
      .then(
        () => {
          setStatus({
            loading: false,
            success: "Message sent successfully!",
            error: null,
          });
          formRef.current?.reset();
          setShowToast(true);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus({
            loading: false,
            success: null,
            error: "Failed to send message. Please try again.",
          });
          setShowToast(true);
        }
      );
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-200 px-4 relative">
      {showToast && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white ${
            status.success ? "bg-green-600" : "bg-red-600"
          }`}
          role="alert"
        >
          {status.success || status.error}
        </div>
      )}

      <div className="bg-black p-8 rounded-lg shadow-lg max-w-lg w-full border border-gray-600">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          Contact Us
        </h1>

        <p className="text-gray-300 mb-6 text-center">
          If you have any query or want to suggest something to improve our app,
          your suggestions are welcome!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full border border-gray-600 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
