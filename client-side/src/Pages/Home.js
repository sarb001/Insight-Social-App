import React from 'react'

const Home = () => {
  return (
    <div>
          <div className = "home-outer-container" style = {{margin:'5% 15%'}}> 
              <h3> All posts are shown here </h3>
            <div className = "home-container"  >
                <div className = "card-container" style = {{backgroundColor:'#8996a1',width:'40%',padding:'2%',margin:'4%'}} >
                    <div className = "card-content">
                        <h5> ramesh </h5>
                        <div className = "card-imge">
                          <span> <img src = "/Snowintrees.avif" style = {{width:'80%'}} /> </span>  
                        </div>
                        <div className="card-content">
                        <i className='material-icons' style = {{color:'red'}}> favorite </i>
                          <span> title </span>
                          <h4> This is amazing post  </h4>
                          <input type = "text" placeholder='Add a Comment' />
                        </div>
                    </div>
                </div>
            </div>

            <div className = "home-container"  >
                <div className = "card-container" style = {{backgroundColor:'#8996a1',width:'40%',padding:'2%',margin:'4%'}}>
                    <div className = "card-content">
                        <h5> ramesh </h5>
                        <div className = "card-imge">
                          <span> <img src = "/Snowintrees.avif" style = {{width:'80%'}} /> </span>  
                        </div>
                        <div className="card-content">
                        <i className='material-icons' style = {{color:'red'}}> favorite </i>
                          <span> title </span>
                          <h4> This is amazing post  </h4>
                          <input type = "text" placeholder='Add a Comment' />
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Home