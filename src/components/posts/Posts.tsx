import React from 'react'
import Post from '../post/Post'
import Title from '../Title'
const Posts:React.FC=()=>{
    return(
        <>
        
            <Title title='Latest Blogs'/>
            <div className='posts'>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>
    )
}

export default Posts