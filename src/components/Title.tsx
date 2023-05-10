import React from 'react'
interface IProps{
    title:string
}

const Title:React.FC<IProps>=({title})=>{
    const titleStyle={
        borderBottom: '1px solid rgb(233, 233, 233)',
        marginBottom: '15px'
    }
    return(
        <>
            <div style={titleStyle} className='title'>
                <h2 style={{paddingBottom:'15px'}}>{title}</h2>
            </div>
        </>
    )
}

export default Title