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
import Detail from './Component/Detail'
import PrintFormat from './Component/PrintFormat'


function App() {
  

  const route = createBrowserRouter([
    {
      path:'/',
      element:< Layout />,
      children:[
        {
          path:'/',
          element:<Dashboard />
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
          path:'/ModelAggrement',
          element:< ModelAgreement />
        },
        {
          path:'/allusers',
          element:< Detail />
        },
        {
          path:'/printpage',
          element:<PrintFormat />
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