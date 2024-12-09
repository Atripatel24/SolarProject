import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Detail = () => {

    const [user, setUser] = useState(null)

    const userdata = async () => {
       // api
    }

    useEffect(() => {

        userdata()
    }, []);

    return (
        <>
            <div className='detail'>
                <div className="insideform">
                    <h1>details</h1> <br /><br />

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
                                        <td>{item.address}</td>
                                        <td>{item.mobile}</td>
                                        <td>
                                            <button><Link to={`/printpage`} state={item._id}className='link-btn'>View</Link></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }

                </div>
            </div>
        </>
    )
}

export default Detail
