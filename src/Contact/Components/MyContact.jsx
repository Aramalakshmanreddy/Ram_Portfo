import emailjs from "@emailjs/browser";
import { useRef , useState} from "react";
import { IoMdContacts } from "react-icons/io";

function MyContact() {
  const form = useRef();
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    
    form.current.from_name.value = `${form.current.first_name.value} ${form.current.last_name.value}`;

    emailjs
      .sendForm(
        "service_zgxr8tg", // Service ID
        "template_a9xt18j", // Template ID
        form.current,
        "cX10PlWYRoeVrMYlE" // Public key
      )
      .then(
        (result) => {
          console.log("Email sent to you:", result.text);

          // Send a confirmation email to the client
          emailjs
            .send(
              "service_zgxr8tg", // Same service ID
              "template_4j5o08f", // New template ID for client confirmation
              {
                client_name: form.current.first_name.value, // Client's first name
                client_email: form.current.user_email.value, // Client's email address
              },
              "cX10PlWYRoeVrMYlE" // Public key
            )
            .then(
              (result) => {
                console.log("Confirmation email sent to client:", result.text);
              },
              (error) => {
                console.log("Error sending confirmation email:", error.text);
              }
            );
            form.current.reset();
            setConfirmationMessage('Thank you! Your message has been sent successfully.');
            setTimeout(() => {
                setConfirmationMessage(''); 
              }, 5000); // 10000 milliseconds = 10 seconds
        },
        (error) => {
          console.log("Error sending email to you:", error.text);
          setConfirmationMessage('An error occurred while sending your message. Please try again.');
          setTimeout(() => {
            setConfirmationMessage(''); 
          }, 10000); // 10000 milliseconds = 10 seconds
        }
      );
  };

  return (
    <>
      <div className=" min-h-screen space-y-10 text-yellow-500 text-2xl">
        <header className="flex justify-center mt-0 p-5 text-4xl md:text-6xl lg:text-6xl ">
          <IoMdContacts /> Contact me...
        </header>

        <form
          className="max-w-md mx-auto p-4 space-y-6 "
          ref={form}
          onSubmit={sendEmail}
        >
         
          <div className="space-y-4 text-yellow-300">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              required
              className="block w-full p-2 border"
            />
          </div>
          <div className="space-y-4">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              required
              className="block w-full p-2 border"
            />
          </div>
          <div className="space-y-4">
            <label>Contact Number</label>
            <input
              type="text"
              name="contact_number"
              required
              className="block w-full p-2 border"
            />
          </div>
          <div className="space-y-4">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="block w-full p-2 border"
            />
          </div>
          <div className="space-y-4">
            <label>Message</label>
            <textarea
              name="message"
              required
              className="block w-full p-2 border"
            />
          </div>

          <input type="hidden" name="to_name" value="Rama Lakshman Reddy" />
          <input type="hidden" name="from_name" value="" />

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-yellow-500 text-black"
          >
            Send
          </button>
        </form>

        {confirmationMessage && (
          <div className="max-w-md mx-auto mt-4 text-center text-yellow-500 text-xl">
            {confirmationMessage}
          </div>
        )}

      </div>
    </>
  );
}

export default MyContact;
