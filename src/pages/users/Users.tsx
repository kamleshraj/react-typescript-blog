import React, { useState,useEffect } from 'react'
import { IUsers } from './../../components/models/IUsers';
import { UsersService } from '../../components/services/UsersService';
import '../users/user.css'

interface IState{
    loading:boolean,
    users:IUsers[],
    errorMsg:string
}

const Users:React.FC = () => {
    const[state,setState]=useState<IState>({
        loading:true,
        users:[] as IUsers[],
        errorMsg:''
    })
    useEffect(()=>{
       UsersService.getAllUsers()
       .then((res)=>setState({
        ...state,
        loading:false,
        users:res.data
       }))
       .catch(err=>setState({
        ...state,
        loading:false,
        errorMsg:err.message
       }))
    },[])
    const{loading,users,errorMsg}=state
  return (
    <>
        <div className='usersList'>
            {loading && <h1>Loading...</h1>}
            {errorMsg && <h1>Something went wrong</h1>}
            {state.users.map((user)=>{
                return(
                    <div className='user-card' key={user.id}>
                        <div className='card-body'>
                            <div><span>Name:</span>{user.name}</div>
                            <p><span>email:</span>{user.email}</p>
                            <div><span>userName:</span> {user.username}</div>
                        </div>
                    </div>
                )}
            )}
        </div>
    </>
  )
}

export default Users