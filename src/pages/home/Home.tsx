import React from 'react'
import Banner from '../../components/banner/Banner'
import '../home/home.css'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
const Home:React.FC=()=>{
    return(
        <>
            <Banner/>
            <div className='home'>
                <div className='posts-main'>
                    <Posts/>
                </div>
                <div className='sidebar-main'>
                    <Sidebar/>
                </div>
            </div>
        </>
    )
}

export default Home