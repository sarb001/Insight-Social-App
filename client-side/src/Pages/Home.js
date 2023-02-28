import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [data,setdata] = useState([]);

    useEffect(() => {

      const config = {
        headers : {
          "Content-Type"  : "application/json",
        }
      }

        axios.get('/allpost' , config)
        .then((res) => {  console.log('response  iss home',res);
         setdata(res.data.posts)
        })

    },[])


  return (
    <div>

         { data.map(item => {
             return (
             <> 
              <div className="main-pagecontainer" style = {{display:'grid',margin:'3%'}}>
                   <div className="main-container" style = {{width:'50%',backgroundColor:'lightgreen'}}>

                  <div className="first-side">
                       Title  -  {item.title}
                  </div>
                  <div className="second-side">
                  <span>
                     <img src =  {item.photo} alt = "photo-main" style = {{width:'24%'}}/>
                  </span> 
                  </div>
                  <div className="third-side">
                      Body is - {item.body}
                  </div>
                   </div>
                   </div>
             </>)
         }) }
         
    </div>
  )
}

export default Home