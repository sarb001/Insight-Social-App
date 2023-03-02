import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify' ;
import  { useNavigate } from 'react-router-dom';

const CreatePost = () => {

   const [title,settitle] = useState("");
   const [body,setbody] = useState("");
   const [image,setimage] = useState("");
   const [url,seturl] = useState("");
  const navigate = useNavigate();


     useEffect(() => {
      if(url)
      {
          try{
              const config = {
                headers : {
                  "Content-Type" : "application/json",
                  'Authorization' : "Bearer " + localStorage.getItem('jwt'),
                }
              }

              axios.post('/createpost' , {
                title,
                body,
                photo:url,
              },config)
              .then(res => { console.log('ress in CLient is',res)})
              .catch(error => {
                toast.error(' Something Went Wrong in Axios ')
              })

              toast.success(' Post is Created Successfully  ')
              navigate('/')

          }catch(error)
          { 
            console.log(' err  while creating post is -',error);
            toast.error(' Something Went Wrong')
          }
     }
     },[url])


     const handleimagepost = async() => {

        const data  = new FormData();
        
        data.append("file",image)
        data.append("upload_preset","insight-social-app")
        data.append("cloud_name","damnzg3hr");

          await axios.post('https://api.cloudinary.com/v1_1/damnzg3hr/image/upload' ,data)
          .then((res) => {
              console.log('image is- ',res.data.url);
              seturl(res.data.url)
          }) 
          .catch((err) => console.log(' Image Error while uploading ',err));
     }

  
  return (      
    <div> 
        <div className = "createpost-outercontainer" style = {{margin:'5% 25%'}} >
                  <h5> CreatePost </h5>
          <div className="createpost-container" style = {{backgroundColor:'wheat',padding:'2%'}}>
              <span> <input type = "text" placeholder = 'Enter your title' 
              value = {title} onChange = {(e) => settitle(e.target.value)} /> </span>
              <span> <input type = "text" placeholder = 'Enter your Body'  
              value = {body}  onChange = {(e) => setbody(e.target.value)} /> </span>
             
                <label htmlFor = "file-upload" id = "file-upload">
               </label>
                <input  type = "file"  id = "file-upload"  onChange={(e) => setimage(e.target.files[0]) } />
                 
                <div className="submit-post" style = {{paddingTop:'4%'}} >
                  <button onClick={() =>  handleimagepost()}>  SUBMIT POST </button>
                </div>
        </div>
          </div>
    </div>
  )
}

export default CreatePost