import React from 'react'
import ErrorImage from "../Images/ErrorImage.jpg"
import "../Error/Error.css"

const Error = () => {
  return (
      <div>
          <div className='errorImg'>
              <img className='errorImage' src={ErrorImage} alt=""/>
          </div>
    </div>
  )
}

export default Error;