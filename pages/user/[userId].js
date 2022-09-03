import React,{useState,useEffect} from "react";
import axios  from "axios";
import {LikeOutlined} from "@ant-design/icons"
import Info from "../../components/Info";

const UserDetail =()=>{
    const [singleUser,setSIngleUser]=useState("")
    const handleGetUser = async()=>{
        const url = window.location.pathname.split('/user/')
        console.log(url)
        const userdetail = await axios.get(`https://test-task-api-optimo.herokuapp.com/employee/${url[1]}`);   
         console.log(userdetail.data)
         setSIngleUser(userdetail.data)
      }
      const handleLike =async ()=>{
        const likeuser = await axios.put(
          `https://test-task-api-optimo.herokuapp.com/employee/${singleUser.id}`,
          {  },
          {
            headers: {
             
            },
          }
        )
      }
      useEffect(() =>{
        handleGetUser()
        
       },[handleLike]);
    return(
      <> 
     <Info></Info>
      <div className="top-space">
      
      </div>
        <div className="jumbotron single-user">
           <div className='listItem-wrap'>
  
    
    <img src={`https://test-task-api-optimo.herokuapp.com${singleUser.avatar}`} alt='' />
    
 
    <header>
     
       
      <h4>{singleUser.description}</h4>
     
      <span><LikeOutlined/>{singleUser.liked}</span>
    </header>
    <p><button className="main-button" onClick={handleLike}>Like</button></p>
    
    <footer>
      
      <p>
        <b>{singleUser.name}</b> 
      </p>
     
      <p>
        {/* <b>{job_id}</b> */}
      </p>
     
    </footer>
  </div>
  
        </div>
        <div className='scroll-block'>
   
   </div>
        </>
    )
}

export default UserDetail;