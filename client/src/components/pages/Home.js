import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        {/* Contact Form */}
        <ContactForm />
      </div>
      <div>
        {/* Contacts Component */}
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
