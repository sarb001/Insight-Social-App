import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { MainContext } from '../Reducers/Context';


const UserProfile = () => {
    const { userid } = useParams();
    // const data = (localStorage.getItem('user'));

    // const [userprofile,setuserprofile] = useState(null);
    const {state,dispatch} = useContext(MainContext);
    console.log('state issssss -',state);     // showing null 

    
//     console.log('user id is --',userid);

    // useEffect(() => {
         
    //      const config = {
    //         headers : {
    //             "Content-Type" : 'application/json',
    //             "Authorization" : "Bearer " + localStorage.getItem('jwt')
    //         }
    //      }

    //      const response = axios.get(`/user/${userid}`,config)
    //      .then(res => {
    //         console.log(' Specific user id ---',res)
    //         setuserprofile(res)
    //      })

    // },[])

//     // follow user

//     const followuser = async() => {
//             const config = {
//                 headers : {
//                     "Content-Type" :"application/json",
//                    "Authorization" : "Bearer " + localStorage.getItem('jwt')
//                 }
//             }

//             const res = await axios.put('/follow' , {
//                 followId : userid
//             },config)
//             .then(data => {
//                  console.log(' FOllow  user on working is --',data);
//                  dispatch({type:'UPDATE',payload : {following:data.following,followers:data.followers}})
//                  localStorage.setItem('user',JSON.stringify(data))
//                  setuserprofile((prevstate) => {

//                      return {
//                         ...prevstate,
//                         user : {
//                             ...prevstate.user,
//                             followers : [...prevstate.data.user.followers,data._id]
//                         }
//                      }
//                  })
//                  setshowfollow(false);
//             })

//     }

//     // unfollow user 
//     const unfollowuser = async() => {
//         const config = {
//             headers : {
//                 "Content-Type" :"application/json",
//                 "Authorization" : "Bearer " + localStorage.getItem('jwt')
//             }
//         }

//         const res = await axios.put('/unfollow' , {
//             unfollowId : userid
//         },config)
//         .then(insidedata => {
//              console.log(' FOllow  user on working is --',insidedata.data);
//              dispatch({type:'UPDATE',payload : {following:insidedata.data.following,followers:insidedata.data.followers}})
//              localStorage.setItem('user',JSON.stringify(insidedata.data))

//              setuserprofile((prevstate) => {
//                 const newFollower = prevstate.user.followers.filter(item => item !== insidedata.data._id)
//                  return {
//                     ...prevstate,
//                     user : {
//                         ...prevstate.user,
//                         followers : newFollower
//                     }
//                  }
//              })
//         })

// }

   const stateuserprofile = JSON.stringify(state);


  return (
    <>
    <h5>  here in UserProfile ssssis -  {stateuserprofile}  </h5>
    <h5>  user id is - {userid}  </h5>
    </>


    // <div> 
    //  <div className="profile-outer-container" >
    //     { userprofile ? (
    //     <>
    //              <div className="profile-container" style = {{margin:'5% 20%'}}>
    //                 <div className="first-profile-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
    //                     <div className="profile-img">
    //                         <span> <img src = "/antoine-transon-z8mpTt1sdC8-unsplash.jpg" alt = "Profile-img" style = {{width:'40%'}} /> </span> 
    //                     </div>
    //                     <div className="profile-data">
    //                         <div className="profile-data-name">
    //                             <h5> state is - {state} </h5>
    //                         <span style =  {{fontSize:'28px'}}> Name is-  {userprofile?.data.user.name} </span>
    //                         <br />
    //                         <span style =  {{fontSize:'28px'}}> {userprofile?.data.user.email} </span>
    //                         </div>
    //                         <div className="profile-data-details">
    //                         <span style =  {{fontSize:'20px'}}> {userprofile.data.posts.length} posts </span>
    //                         <span style =  {{fontSize:'20px'}}> {userprofile.data.user.followers.length}  followers </span>
    //                         <span style =  {{fontSize:'20px'}}> {userprofile.data.user.following.length}  following </span>

    //                              {showfollow ? (
    //                              <>
    //                                     <div className = "showing-btn" style = {{paddingTop:'5%'}}>
    //                                             <button style = {{padding:'2%'}} onClick = {() => followuser()}>  FOLLOW  </button>
    //                                     </div>
    //                              </>) : (
    //                              <>
    //                                     <div className = "showing-btn" style = {{paddingTop:'5%'}}>
    //                                             <button style = {{padding:'2%'}} onClick = {() => followuser()}>  FOLLOW  </button>
    //                                     </div>
    //                              </>)}

    //                         </div>
    //                     </div>


    //                 </div>
    //                 <div className="second-profile-side" style = {{paddingTop:'12%',display:'flex'}}> 
    //                     {  
    //                       userprofile.data.posts.map((item) => {
    //                           return(
    //                               <>
    //                              <div style = {{margin:'4% 5%'}}>
    //                               <span> <img src = {item.photo} style = {{width:'40%'}}/> </span>
    //                              </div>
    //                             </>
    //                          )
    //                       })
    //                     }
    //                  </div>
    //             </div>

    //     </>) : ( 
    //     <>
    //         <h2> Loading....... </h2>
    //     </>)
    //     }
             
    //  </div>
    // </div>
  )
}

export default UserProfile