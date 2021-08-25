import emailjs from 'emailjs-com';
import env from 'react-dotenv';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    const serviceId = env.EMAIL_SERVICE_ID;
    const templateId = env.EMAIL_TEMPLATE_ID;
    const emailUserId = env.EMAIL_USER_ID;

    emailjs.sendForm(serviceId, templateId, e.target, emailUserId).then(
      (result) => {
        console.log('Email Sent', result.text);
      },
      (error) => {
        console.log('Email Error', error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Name" />
        <input type="email" name="from_email" placeholder="example@email.com" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea placeholder="Your message" name="message" />
        <button type="submit" value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
