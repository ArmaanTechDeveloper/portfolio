import "./pagesCss/Contact.css";

// database imports 
import { db } from '../firebase/config';
import {addDoc , collection} from 'firebase/firestore';
import { useState } from "react";


export default function Contact() {

  const [formSubmitted , setFormSubmittd] = useState(false);

  function updateDatabase(name , email , message , e){
    let colRef = collection(db , 'contact');
    let newDoc = {
      name: name,
      email: email,
      message: message,
      addtohome: false
    }

    addDoc(colRef , newDoc)
      .then(()=>{
        //resetting the form

        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
        setFormSubmittd(true);
      })
  }
  function handleSubmit(e){
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    updateDatabase(name , email , message , e);
  }
  return (
    <div id="contact">
      {formSubmitted && <h1>You response have been submitted  ... </h1>}
      {!formSubmitted && <form onSubmit={handleSubmit}>
        <label>Enter Your name</label>
        <input type="text" name="name"/>
        <label>Enter Your email</label>
        <input type="email" name="email"/>
        <label>Enter Your message</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>}
    </div>
  );
}
