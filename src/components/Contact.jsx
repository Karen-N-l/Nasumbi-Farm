import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnqkwplq");
  const [messageSent, setMessageSent] = React.useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setMessageSent(true);
      // Automatically hide the success message after 5 seconds
      setTimeout(() => setMessageSent(false), 2000);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center p-4">
      
        <form onSubmit={handleFormSubmit} className="flex flex-col max-w-[600px] w-full  ">
          <div className="pb-0 pt-20 mt-5">
            <p className="text-[#076C05] text-3xl font-bold">Contact Us</p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2 outline-none"
            type="text"
            placeholder="Name"
            name="name" required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            className="my-4 p-2 bg-[#ccd6f6] outline-none"
            type="email"
            placeholder="Email"
            name="email" required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            className="bg-[#ccd6f6] p-2 outline-none"
            name="message"
            rows="10"
            placeholder="Message" required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-[#6E9320] text-white border-2 px-4 py-3 my-8 mx-auto flex items-center rounded-md"
          >
            Send a Message
          </button>
          {messageSent && (
          <p className="text-[#076C05] text-sm font-bold text-center mt-1"> {/* Adjust mt-4 for spacing */}
            Message sent successfully!
          </p>
        )}
        </form>
        
      </div>
    
  );
};

export default Contact;
