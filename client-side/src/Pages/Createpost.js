import React from 'react'

const CreatePost = () => {
  return (
    <div> 
        <div className = "createpost-outercontainer" style = {{margin:'5% 25%'}} >
                  <h5> CreatePost </h5>
          <div className="createpost-container" style = {{backgroundColor:'wheat',padding:'2%'}}>
              <span> <input type = "text" placeholder='Enter your title' /> </span>
              <span> <input type = "text" placeholder='Enter your Body' /> </span>
             
                <label htmlFor = "file-upload" id = "file-upload">
               </label>
                <input  type = "file"  id = "file-upload" />
                 
                <div className="submit-post" style = {{paddingTop:'4%'}} >
                  <button> SUBMIT POST </button>
                </div>
        </div>
          </div>
    </div>
  )
}

export default CreatePost