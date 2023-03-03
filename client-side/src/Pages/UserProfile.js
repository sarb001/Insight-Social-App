import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {

    const { userid } = useParams();
    const [userprofile,setprofile] = useState(null);
    console.log('user id is --',userid);

    useEffect(() => {
         
         const config = {
            headers : {
                "Content-Type" : 'application/json',
                "Authorization" : "Bearer " + localStorage.getItem('jwt')
            }
         }

         const response = axios.get(`/user/${userid}`,config)
         .then(res => {
            console.log(' resssssss ',res)
            setprofile(res)
         })

    },[])


  return (
    <div> 
     <div className="profile-outer-container" >
        { userprofile ? (
        <>
                 <div className="profile-container" style = {{margin:'5% 20%'}}>
                    <div className="first-profile-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                        <div className="profile-img">
                            <span> <img src = "/antoine-transon-z8mpTt1sdC8-unsplash.jpg"  style = {{width:'40%'}} /> </span> 
                        </div>
                        <div className="profile-data">
                            <div className="profile-data-name">
                            <span style =  {{fontSize:'28px'}}> ramesh  verma  </span>
                            <span style =  {{fontSize:'28px'}}> {userprofile?.data.user.email} </span>
                            </div>
                            <div className="profile-data-details">
                            <span style =  {{fontSize:'20px'}}> {userprofile.data.posts.length} posts </span>
                            <span style =  {{fontSize:'20px'}}> 40 followers </span>
                            <span style =  {{fontSize:'20px'}}> 40 following </span>
                            </div>
                        </div>

                    </div>
                    <div className="second-profile-side" style = {{paddingTop:'12%',display:'flex'}}> 
                        <span> <img src = "/antoine-transon-z8mpTt1sdC8-unsplash.jpg"  style = {{width:'70%'}}/> </span>
                        <span> <img src = "/antoine-transon-z8mpTt1sdC8-unsplash.jpg"  style = {{width:'70%'}}/> </span>
                        <span> <img src = "/antoine-transon-z8mpTt1sdC8-unsplash.jpg"  style = {{width:'70%'}}/> </span>
                    </div>
                </div>

        </>) : ( 
        <>
            <h2> Loading....... </h2>
        </>)
        }
             
     </div>
    </div>
  )
}

export default UserProfile