import emailjs from 'emailjs-com';
import { useState } from 'react';
import env from 'react-dotenv';

const Contact = () => {
  const [successSend, setSuccessSend] = useState(false);
  const [error, setError] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    const serviceId = env.EMAIL_SERVICE_ID;
    const templateId = env.EMAIL_TEMPLATE_ID;
    const emailUserId = env.EMAIL_USER_ID;

    emailjs.sendForm(serviceId, templateId, e.target, emailUserId).then(
      (result) => {
        console.log('Email Sent', result.text);
        setSuccessSend(true);
      },
      (error) => {
        console.log('Email Error', error.text);
        setError(true);
      }
    );
    e.target.reset();
  }

  return (
    <div className="contact">
      <h2>Contact me</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Name" className="from-name" />
        <input type="email" name="from_email" placeholder="Email Address" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea placeholder="Your message" name="message" />
        {successSend && <p>Your message was successful.</p>}
        {error && <p>There was an error sending your message.</p>}
        <button type="submit" value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
