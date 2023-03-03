import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

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

   const likepost = (id) => {

    const config = {
      headers : {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + localStorage.getItem('jwt')
      }
     }

          axios.put('/like' , { postId : id
          },config).then(res  =>  { 
             console.log(' Like Post here',res)

             const newdata = data.map(item => {
              if(item._id == res._id){
                return res
              }else{
               return item
              }
           })
           setdata(newdata)
           toast.success(' Liked the Post ')

          })
   }

   
   const unlikepost = (id) => {
    const config = {
      headers : {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + localStorage.getItem('jwt')
      }
     }

          axios.put('/unlike' , {
            postId : id 
        },config).then(res => {
          console.log(' UnLike post here  ',res)

          const newdata = data.map(item => {
             if(item._id == res._id){
               return res
             }else{
              return item
             }
          })
          toast.success(' Unliked Post ')
          setdata(newdata)
        }).catch(err => {
          console.log(err)
        })
      
   }

  return (
    <div>

           <div className = "home-outer-container" style = {{margin:'5% 15%',cursor:'pointer'}}> 
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
                                <span>   <i className='material-icons' style = {{color:'red'}}> favorite </i>
                                </span>
                                <div className="likes">
                                  <span> <i className='material-icons' style = {{color:'black'}}  
                                   onClick = {() => likepost(item._id)} > thumb_up </i> </span>
                                  <span> <i className='material-icons' style = {{color:'black'}}  
                                   onClick = {() => unlikepost(item._id)}> thumb_down </i> </span>
                                </div>
                              
                                <h6>  {item.likes.length} </h6> 
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