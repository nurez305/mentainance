import React from 'react'
import './Mentain.css'
import image1 from '../Asset/images 1.jpeg'

function Mentain() {
  return (
    <div className='container'>
        <h1>Nurez's <span className='blog-name'>Blog</span></h1>
        <h1>COMING SOON</h1>
        <div className='flex-word'>
        <div>
        <p>My blog website is under construction and should be released within a very short period of time. I am preparing something amazing and exciting for you. The blog website will be based on teaching programming language with best practices for beginners.</p>
        </div>
        <img src={image1} alt="" />
       <a href="http://saliunurudeen.netlify.com"><button>Back to my Personal website</button></a> 
        </div>

        
    </div>
  )
}

export default Mentain