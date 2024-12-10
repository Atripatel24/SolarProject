import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = ({isAuth}) => {
  let navigate = useNavigate()
  useEffect(() => {

    if (!isAuth)
        navigate('/signup')
}, [isAuth])
  return (
    <>
      <div className='dashboard' >
        <div className='button-container'>
          <button className='btn blue-btn'>Add User</button>
          <button className='btn green-btn'><a href='/Details' style={{textDecoration:'none',color:'white'}}>View Users</a></button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
