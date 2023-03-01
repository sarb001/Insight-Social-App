import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [data,setdata] = useState([]);

  return (
    <div>

        <span> In the Homepage  </span>

         { data.map(item => {
             return (
             <> 
              <div className="main-pagecontainer" key = {item._id}  style = {{display:'grid',margin:'3%'}}>
                      <h2> Ramesh - </h2>
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