import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';
import env from 'react-dotenv';
import * as yup from 'yup';
import contactFormSchema from '../utils/contactFormSchema';

const initialValues = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
};
const initialErrors = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [successSend, setSuccessSend] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validate = (inputName, inputValue) => {
    yup
      .reach(contactFormSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setErrors({ ...errors, [inputName]: '' });
      })
      .catch((err) => {
        setErrors({ ...errors, [inputName]: err.errors[0] });
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setSuccessSend(false);
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    contactFormSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  const sendEmail = (evt) => {
    evt.preventDefault();

    const serviceId = env.EMAIL_SERVICE_ID;
    const templateId = env.EMAIL_TEMPLATE_ID;
    const emailUserId = env.EMAIL_USER_ID;

    emailjs.sendForm(serviceId, templateId, evt.target, emailUserId).then(
      (result) => {
        console.log('Email Sent', result.text);
        setSuccessSend(true);
      },
      (error) => {
        console.log('Email Error', error.text);
        setEmailError(true);
      }
    );
    evt.target.reset();
    setButtonDisabled(true);
  };

  return (
    <div className="contact">
      <h2>Send me an email!</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input
          onChange={onChange}
          type="text"
          name="from_name"
          placeholder="Name"
          className="from-name"
        />
        <input
          onChange={onChange}
          type="email"
          name="from_email"
          placeholder="Email Address"
        />
        <input onChange={onChange} type="text" name="subject" placeholder="Subject" />
        <textarea onChange={onChange} placeholder="Your message" name="message" />
        {successSend && <p>Your message was successful.</p>}
        {emailError && <p>There was an error sending your message.</p>}
        {errors.from_name && <div className="error">{errors.from_name}</div>}
        {errors.from_email && <div className="error">{errors.from_email}</div>}
        {errors.subject && <div className="error">{errors.subject}</div>}
        {errors.message && <div className="error">{errors.message}</div>}
        <button
          disabled={buttonDisabled}
          className={!buttonDisabled && 'enabled'}
          type="submit"
          value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
