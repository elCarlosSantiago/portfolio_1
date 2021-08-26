import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

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

    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const emailUserId = process.env.REACT_APP_EMAIL_USER_ID;
    console.log(process.env.REACT_APP_EMAIL_SERVICE_ID)
    console.log(templateId)
    console.log(emailUserId)
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
        {errors.from_name && <span className="error">{errors.from_name}</span>}
        {errors.from_email && <span className="error">{errors.from_email}</span>}
        {errors.subject && <span className="error">{errors.subject}</span>}
        {errors.message && <span className="error">{errors.message}</span>}
        <button
          disabled={buttonDisabled}
          className={!buttonDisabled ? 'enabled' : undefined}
          type="submit"
          value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
