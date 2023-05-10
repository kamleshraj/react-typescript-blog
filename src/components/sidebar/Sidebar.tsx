import React from 'react'
import Title from '../Title'
import '../sidebar/sidebar.css'

const Sidebar:React.FC=()=>{
    return(
        <>
            <div className='sidebar-info'>
                <img src={'../assets/sidebarImg.PNG'} alt='sidebar'/>
                <Title title={'Quick Contact'}/>
                <p>Eco banner with fresh green leaves on white background banner with fresh green leaves on white.</p>

                <div className='categories-main'>
                    <Title title={'CATEGORIES'}/>
                    <div className='categories-list'>
                        <ul>
                            <li>Life</li>
                            <li>Music</li>
                            <li>Style</li>
                            <li>Sport</li>
                            <li>Tech</li>
                            <li>Cinema</li>
                            <li>Cricket</li>
                            <li>Badminton</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar