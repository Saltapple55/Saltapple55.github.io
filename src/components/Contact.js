import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
const ContactForm = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7nogc3k', 'template_z4y56zg', form.current, {
        publicKey: 'o5jH4B7QsQxqw5C24',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thank you! I'll contact you as soon as possible!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <StyledContactForm>
    <p className="text">To contact me, please fill out this form!</p>

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </StyledContactForm>
  );
};


export default ContactForm;

const StyledContactForm = styled.div`
width: 400px;

form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size:16px;

    input{
    width: 100%;
    height:35px;
    padding:7px;
    outline:none;
    border-radius:5px;
    border:1px solid rgb(220,220,220) ;
    &:focus{
    border: 2px solid  #406840;

    }
}
    textarea{
    max-width:100%;
    min-width:100%;
    width:100%;
    max-height:100px;
    min-height:100px;
    outline:none;
    border-radius: 5px;
 border:1px solid rgb(220,220,220) ;
    &:focus{
    border: 2px solid #406840;   
        }
    }
    label{
    margin-top: 1rem;
    }

    input[type="submit"] {
    margin-top:2rem;
    cursor: pointer;
    background: #406840;
    color:white;
    border: none;
    }
}
`;
  