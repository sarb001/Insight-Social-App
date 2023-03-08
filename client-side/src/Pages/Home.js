import axios from 'axios';
import React, { useEffect, useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MainContext } from '../Reducers/Context';

const Home = () => {

   const [data,setdata] = useState([]);
   const {state,dispatch} =  useContext(MainContext)

    console.log('state in Home is  -',state);

  //  useEffect(() => {
  //    const config = {
  //     headers : {
  //       "Content-Type": "application/json",
  //       "Authorization" : "Bearer " + localStorage.getItem('jwt')
  //     }
  //    }

  //    axios.get('/allpost' , config)
  //    .then((res) =>  {  console.log('response in home -',res);
  //     setdata(res.data.posts)
  //     })
  //  },[])

  //  const likepost = (id) => {

  //   const config = {
  //     headers : {
  //       "Content-Type": "application/json",
  //       "Authorization" : "Bearer " + localStorage.getItem('jwt')
  //     }
  //    }

  //         axios.put('/like' , { postId : id
  //         },config).then(res  =>  { 
  //            console.log(' Like Post here',res)

  //            const newdata = data.map(item => {
  //             if(item._id == res._id){
  //               return res
  //             }else{
  //              return item
  //             }
  //          })
  //          setdata(newdata)
  //          toast.success(' Liked the Post ')

  //         })
  //  }

  //  const unlikepost = (id) => {
  //   const config = {
  //     headers : {
  //       "Content-Type": "application/json",
  //       "Authorization" : "Bearer " + localStorage.getItem('jwt')
  //     }
  //    }

  //         axios.put('/unlike' , {
  //           postId : id 
  //       },config).then(res => {
  //         console.log(' UnLike post here  ',res)

  //         const newdata = data.map(item => {
  //            if(item._id == res._id){
  //              return res
  //            }else{
  //             return item
  //            }
  //         })
  //         toast.success(' Unliked Post ')
  //         setdata(newdata)
  //       }).catch(err => {
  //         console.log(err)
  //       })
      
  //  }

  //  const makecomment = (text,postId) => {
   
  //   const config = {
  //     headers : {
  //       "Content-Type": "application/json",
  //       "Authorization" : "Bearer " + localStorage.getItem('jwt')
  //     }
  //    }

  //    axios.put('/comment' , {
  //       postId : postId,
  //       text : text 
  //    },config)
  //    .then(res => {
  //        console.log(' Commented Done -',res)
  //        const newdata = data.map(item => {
  //          if(item._id == res._id){
  //            return res
  //           }else{
  //             return item
  //           }
  //         })
  //         toast.success(' Comment Done  ')
  //         setdata(newdata)
  //  }).catch(err => {
  //      console.log('error is',err);
  //  })
  //  }

  //  const deletepost = (postid) => {

  //   const config = {
  //     headers : {
  //       "Content-Type": "application/json",
  //       "Authorization" : "Bearer " + localStorage.getItem('jwt')
  //     }
  //    }

  //    axios.delete(`/deletepost/${postid}` ,config)
  //    .then(res =>  {
  //       console.log('  post deleted is ',res);
  //       const newdata = data.filter(item => {
  //          return item._id !== res._id
  //       })
  //       toast.success(' Post is Deleted Now ')
  //       setdata(newdata)
  //    })

  //  }
  
   const statechange = JSON.stringify(state);

  useEffect(() => {
     console.log('inside the Effectccc ');
  })

  return (
    <div>
      <h5>   State in Home.js is - 
        <span> 
         {statechange} 
        </span>
         </h5> 

          {console.log('inside Home ')}
           {/* <div className = "home-outer-container" style = {{margin:'5% 15%',cursor:'pointer'}}> 
              <h3> All Public posts are shown here </h3>

              {console.log('data in phase is - ',data)}

              {data.map((item) => {
                return(
                  <>
                  <div className = "home-container"  >
                      <div className = "card-container" style = {{backgroundColor:'#8996a1',width:'40%',padding:'2%',margin:'4%'}} >
                          <div className = "card-content" >
                                <div className="first-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                                <Link to = {`/profile/${item.postedBy._id}`}> 
                                  <h5>  {item.postedBy.name} </h5>
                                </Link>
                                <span> 
                              
                                   <i className='material-icons' style = {{color:'black'}} 
                                   onClick = {() => deletepost(item._id)} > delete </i>
                                  
                                </span> 
                                 </div>
                              <div className = "card-imge">
                                <span> <img src = {item.photo} style = {{width:'80%'}} /> </span>  
                              </div>
                              <div className="card-content">
                                <span>  
                                   <i className='material-icons' style = {{color:'red'}}> favorite </i>
                                </span>
                                <div className = "likes">
                                  
                                    <span> <i className='material-icons' style = {{color:'black'}}  
                                     onClick = {() => likepost(item._id)} >  thumb_up </i> </span>
                                 
                                    <span> <i className='material-icons' style = {{color:'black'}}  
                                    onClick = {() => unlikepost(item._id)}> thumb_down </i> </span>
                                
                                </div>
                              
                                <h6>  {item.likes.length} </h6> 
                                <h6>  {item.title} </h6> 
                                <h4>   {item.body}  </h4>

                                  {item.comments.map(record => {
                                     return(
                                      <>
                                      <b> {record.text} </b>
                                      <span> By - </span>
                                      </>
                                     )
                                  })}

                                <form onSubmit = {(e) => {
                                      e.preventDefault() 
                                      makecomment(e.target[0].value,item._id)
                                  }}>
                                <input type = "text" placeholder='Add a Comment' />
                                </form>
                              </div>
                          </div>
                      </div>
                  </div>
                   </>
                    )} 
              )}
          </div>  */}
    </div>
  )
}

export default Home