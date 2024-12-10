import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Layout from './Layout'
// import Form from './Component/Form'
// import Detail from './Component/Detail'
// import Dashboard from './Component/dashboard'
import Wcr from './Forms/Wcr'
import Annexure1 from './Forms/Annexure1'
import ProformaA from './Forms/ProformaA'
import SelfDecleration from './Forms/SelfDecleration'
import ConnectionAggrement from './Forms/ConnectionAggrement'
import ModelAgreement from './Forms/ModelAgreement'
import Dashboard from './Component/Dashboard'
import Details from './Forms/Details'
import PrintFormat from './Component/PrintFormat'
import { useEffect, useState } from 'react'
import Signup from './Forms/Signup'


function App() {
  let [isAuth,setIsAuth] = useState(true)

  let getAuthDetails = ()=>{
    let data= JSON.parse(localStorage.getItem('auth')) || {isAuth:false}

    setIsAuth(data?.isAuth)
  }
  useEffect(()=>{
    getAuthDetails()
  },[])
  

  const route = createBrowserRouter([
    {
path:'/signup',
element:<Signup getAuthDetails={getAuthDetails} setIsAuth={setIsAuth} />
    },
    {
      path:'/',
      element:<Layout isAuth={isAuth} />,
      children:[
        {
          path:'/',
          element:<Dashboard isAuth={isAuth} />
        },
        {
          path:'/wcr',
          element:<Wcr/>
        },
        {
          path:'/Annexure1',
          element:<Annexure1/>
        },
        {
          path:'/ProfomaA',
          element:< ProformaA />
        },
        {
          path:'/SelfDecleration',
          element:< SelfDecleration />
        },
        {
          path:'/ConnectionAggrement',
          element:< ConnectionAggrement />
        },
        {
          path:'/ModelAgreement',
          element:< ModelAgreement />
        },
        {
          path:'/Details',
          element:< Details />
        },
        {
          path:'/printpage',
          element:< PrintFormat />
        }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App