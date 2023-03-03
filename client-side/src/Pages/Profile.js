import React from 'react'

const Profile = () => {
  return (
    <div> 
     <div className="profile-outer-container" >
              <div className="profile-container" style = {{margin:'5% 20%'}}>
                  <div className="first-profile-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                      <div className="profile-img">
                           <span> <img src = "/antoine-transon-z8mpTt1sdC8-unsplash.jpg"  style = {{width:'40%'}} /> </span> 
                      </div>
                      <div className="profile-data">
                         <div className="profile-data-name">
                           <span style =  {{fontSize:'28px'}}> ramesh  verma  </span>
                         </div>
                         <div className="profile-data-details">
                          <span style =  {{fontSize:'20px'}}> 40 posts </span>
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

     </div>
    </div>
  )
}

export default Profile