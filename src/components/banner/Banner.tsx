import React from 'react'

const Banner:React.FC=()=>{
    const bannerStyle={
        maxHeight: '80vh',
        overflow: 'hidden'
    }
    return(
       <div className='banner-main' style={bannerStyle}>
        <img src={'../assets/banner.jpg'} alt='banner' width='100%'/>
       </div>
    )
}

export default Banner