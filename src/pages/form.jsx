// const ContactForm = () => {
//     return (
//         <div className="bg-gray-50" style={{marginRight: '0rem', padding: '2rem 0 2rem 0'}}>
//         <div
//             style={{
//                 maxWidth: "600px",
//                 margin: "2rem auto",
//                 backgroundColor: "#fff",
//                 borderRadius: "1rem",
//                 padding: "2rem",
//                 boxShadow: "0 12px 24px rgba(0, 0, 0, 0.06)",
//                 border: "1px solid #eee",
//             }}
//         >
//             <h2
//                 className="text-fuchsia-600 font-bold"
//                 style={{
//                     fontSize: "2rem",
//                     textAlign: "center",
//                     marginBottom: "1.5rem",
//                     fontWeight: 'bold'

//                 }}
//             >
//                 Contact Me
//             </h2>

//             <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
//                 {/* Name Field */}
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                     <label
//                         className="text-gray-700 font-medium"
//                         htmlFor="name"
//                         style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
//                     >
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         placeholder="Your full name"
//                         style={{
//                             padding: "0.75rem 1rem",
//                             borderRadius: "0.5rem",
//                             border: "1px solid #ccc",
//                             fontSize: "0.95rem",
//                         }}
//                     />
//                 </div>

//                 {/* Email Field */}
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                     <label
//                         className="text-gray-700 font-medium"
//                         htmlFor="email"
//                         style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
//                     >
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="you@example.com"
//                         style={{
//                             padding: "0.75rem 1rem",
//                             borderRadius: "0.5rem",
//                             border: "1px solid #ccc",
//                             fontSize: "0.95rem",
//                         }}
//                     />
//                 </div>

//                 {/* Message Field */}
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                     <label
//                         className="text-gray-700 font-medium"
//                         htmlFor="message"
//                         style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
//                     >
//                         Message
//                     </label>
//                     <textarea
//                         id="message"
//                         rows="4"
//                         placeholder="Write your message here..."
//                         style={{
//                             padding: "0.75rem 1rem",
//                             borderRadius: "0.5rem",
//                             border: "1px solid #ccc",
//                             fontSize: "0.95rem",
//                             resize: "vertical",
//                         }}
//                     ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
//                     <button
//                         type="submit"
//                         className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold"
//                         style={{
//                             padding: "0.75rem 2rem",
//                             borderRadius: "9999px",
//                             fontSize: "1rem",
//                             border: "none",
//                             cursor: "pointer",
//                             transition: "all 0.3s ease",
//                             boxShadow: "0 4px 12px rgba(240, 46, 170, 0.3)",
//                         }}
//                     >
//                         Send Message
//                     </button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     );
// };

// export default ContactForm;



const ContactForm = () => {
    return (
      <div className="bg-gray-50" style={{ marginRight: '0rem', padding: '2rem 0 2rem 0' }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "2rem auto",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.06)",
            border: "1px solid #eee",
          }}
        >
          <h2
            className="text-fuchsia-600 font-bold"
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "1.5rem",
              fontWeight: 'bold'
            }}
          >
            Contact Me
          </h2>
          
          <form
            action="https://formspree.io/f/xpwljaoe"  // 🔁 Replace with your actual Formspree ID
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Name Field */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                className="text-gray-700 font-medium"
                htmlFor="name"
                style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Your full name"
                required
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  fontSize: "0.95rem",
                }}
              />
            </div>
  
            {/* Email Field */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                className="text-gray-700 font-medium"
                htmlFor="email"
                style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  fontSize: "0.95rem",
                }}
              />
            </div>
  
            {/* Message Field */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                className="text-gray-700 font-medium"
                htmlFor="message"
                style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Write your message here..."
                required
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  fontSize: "0.95rem",
                  resize: "vertical",
                }}
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
              <button
                type="submit"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold"
                style={{
                  padding: "0.75rem 2rem",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(240, 46, 170, 0.3)",
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  