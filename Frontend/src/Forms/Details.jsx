import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import { Link } from "react-router-dom";

const Details = () => {
  
    const[user,setUser] = useState([])

    let getAlldata = async()=>{
        let res = await axios.get('http://localhost:5000/api/details')
        console.log('response',res.data)
        setUser(res.data.data)
        
    }
    useEffect(() => {
    //   console.log(user)
    }, [user])
    

    useEffect(() => {
     getAlldata();
    }, [])
    

  return (
    <div className="insideform">
    <div className='detail'>
                
                    <h1>CONSUMER DETAILS</h1> <br /><br />

                    {user == null ? <h1>Loading... <i className="fa-solid fa-spinner"></i></h1> :

                    <table className='user-table'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Consumer Number</th>
                                <th>Address</th>
                                <th>Mobile No.</th>
                                <th>print</th>
                            </tr>
                            {user.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.consumer_number}</td>
                                        <td>{item.site_location}</td>
                                        <td>{item.mobile}</td>
                                        <td>
                                            <button style={{backgroundColor:"#028CBA"}}><Link to={`/printpage`} state={item._id}className='link-btn' style={{textDecoration:"none",color:"white"}}>View</Link></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }

                </div>
            </div>
  );
};

export default Details;
