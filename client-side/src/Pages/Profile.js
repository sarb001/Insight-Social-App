import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../Reducers/Context';

const Profile = () => {

  const [mypics,setpics] = useState([]);
  const {state,dispatch} = useContext(MainContext);

  console.log('state in Profile iss -',state);

//   useEffect(() => {
//     const config = {
//       headers : {
//         "Content-Type"  : "application/json",
//         "Authorization" : "Bearer " + localStorage.getItem('jwt')
//       }
//     }

//       axios.get('/mypost' , config)
//       .then((result) => {  console.log(' myposts are  ',result);
//        setpics(result.data.mypost)
//       })
//  },[])

    const stateprofile = JSON.stringify(state);


  return (
    <>
         State in Profile here is  - {stateprofile}

    </>
    // <div> 
    //  <div className="profile-outer-container" >
    //           <div className="profile-container" style = {{margin:'5% 20%'}}>
    //               <div className="first-profile-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
    //                   <div className="profile-img">
    //                        <span> <img src = "/antoine-transon-z8mpTt1sdC8-unsplash.jpg"  style = {{width:'40%'}} /> </span> 
    //                   </div>
    //                   <div className="profile-data">
    //                      <div className="profile-data-name">
    //                        <span style =  {{fontSize:'28px'}}> Name is-  {state && state.name} </span>
    //                      </div>
    //                      <div className="profile-data-details">
    //                       <span style =  {{fontSize:'20px'}}> {mypics.length} posts </span>
    //                       <span style =  {{fontSize:'20px'}}> 00   followers </span>
    //                       <span style =  {{fontSize:'20px'}}> 00  following </span>
    //                      </div>
    //                   </div>

    //                </div>
    //               <div className="second-profile-side" style = {{paddingTop:'12%',display:'flex'}}> 

    //                  {mypics && mypics.map((item) => {
    //                       return(
    //                         <>
    //                          <span> <img key = {item._id} src = {item.photo}  style = {{width:'70%'}}/> </span>
    //                         </>
    //                       )
    //                  })}

    //               </div>
    //           </div>

    //  </div>
    // </div>
  )
}

export default Profile