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
          <a href="/wcr" className='btns blue-btn' style={{textDecoration:'none', color:'white'}}>Add User</a>
          <a href="/Details" className='btns green-btn' style={{textDecoration:'none', color:'white'}}>View User</a>
        </div>
      </div>
    </>
  )
}

export default Dashboard
