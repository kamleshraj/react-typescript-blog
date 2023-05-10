import React from 'react'
import '../post/post.css'

const Post:React.FC=()=>{
    return(
        <div className='blog-card'>
            <div className='header'>
                <img src={'../assets/postImg2.jpg'} alt='banner'/>
            </div>
            <div className='content'>
                <h2>Add images to a React project with Typescript</h2>
                <p>In every single project, usually, you need to add an image to your React project to show something or to represent a graph and create a beautiful page for your audience.</p>
            </div>
        </div>
    )
}

export default Post