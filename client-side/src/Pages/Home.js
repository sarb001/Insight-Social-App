import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

   const [data,setdata] = useState([]);

   useEffect(() => {
     const config = {
      headers : {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + localStorage.getItem('jwt')
      }
     }

     axios.get('/allpost' , config)
     .then((res) =>  {  console.log('response in home -',res);
      setdata(res.data.posts)
      })
   },[])


  return (
    <div>

           <div className = "home-outer-container" style = {{margin:'5% 15%'}}> 
              <h3> All posts are shown here </h3>

              {data.map((item) => {
                return(
                  <>
                  <div className = "home-container"  >
                      <div className = "card-container" style = {{backgroundColor:'#8996a1',width:'40%',padding:'2%',margin:'4%'}} >
                          <div className = "card-content">
                              <h5>  {item.postedBy.name} </h5>
                              <div className = "card-imge">
                                <span> <img src = {item.photo} style = {{width:'80%'}} /> </span>  
                              </div>
                              <div className="card-content">
                              <i className='material-icons' style = {{color:'red'}}> favorite </i>
                                <h6>  {item.title} </h6> 
                                <h4>   {item.body}  </h4>
                                <input type = "text" placeholder='Add a Comment' />
                              </div>
                          </div>
                      </div>
                  </div>
                   </>
                    )} 
              )}
          </div> 
    </div>
  )
}

export default Home