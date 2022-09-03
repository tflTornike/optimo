import Info from "../components/Info";
import { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
const  Contact = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const handleSendMessage =async()=>{
   if(name.length < 2){
  return  toast.error("please enter name")
    
   }
   if(email.length < 5 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
 return   toast.error("please enter valid email address")
    // console.log("email console")
   }
   if(message.length < 10 ){
  return  toast.error("Text minimum lentg : 10")
   }else{
    const   sendmessage = await 
    axios.post("https://test-task-api-optimo.herokuapp.com/feedback",
          {name,email,message},
          {
               headers:{
  
               },
          })
          toast.success("Message Sent")
   }
 
  }
  return (
    <>
    <Info></Info>
    <div className="contact-container">
    <h4>contact</h4>
    <form className="contact-form" >
      <>
    <label>Name</label>
    <input type="text"
    className="contact-input"
    onChange={(e)=>setName(e.target.value)}
    value={name}
    required
    minLength="2"
    placeholder="Enter Name"
      
    />
    </>
    <>
    <label>Email</label>
    <input type="email"
    className="contact-input"
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    id="email"
    required
    minLength="5"
    placeholder="Enter Email"
    disabled ={name.length < 2 ? true :false}
    />
    </>
    <>
     <label>Message</label>
    <input type="text"
    className="contact-input"
    onChange={(e)=>setMessage(e.target.value)}
    value={message}
    required
    minLength="10"
    placeholder="Enter Message"
    />
    </>
    </form>
    <button className="contact-btn" onClick={handleSendMessage} >Send MEssage</button>
    </div>
    </>
  )
}

export default Contact;