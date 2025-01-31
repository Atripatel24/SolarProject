import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Details = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Define how many items to display per page

  // const data = useLocation();
  // const userId = data.state
  // console.log('userid', userId)

  const getAlldata = async () => {
    let res = await axios.get("https://admin.samarthenergysolution.com/api/details");
    console.log("response", res.data);
    setUser(res.data.data);
  };

  // const navigate = useNavigate
  // useEffect(()=>{
  //   let auth = JSON.parse(localStorage.getItem("auth"))
  //   console.log(auth.isAuth)
  //   if(auth !== true ){
  //     navigate("/signup")
  //   }
  // })

  useEffect(() => {
    getAlldata();
  }, []);




//   let getData = async () => {
//     let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${userId}`)
//     console.log("data", res.data)
//     setUser(res.data.data)
// }

// useEffect(() => {
//     getData();
// }, [])
  // Calculate the data for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = user.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate pagination numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(user.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // delete user 

  const deleteUser = async(id) => {
      await axios.delete(`https://admin.samarthenergysolution.com/api/deleteuser/${id}`)
       getAlldata();
  }

  return (
    <div className="insideform">
      <div className="detail">
        <h1><center>CONSUMER DETAILS</center></h1> <br /> <br />
        
            <table className="user-table">
              <thead>
                <tr>
                <th>Sr.no</th>
                  <th>Name</th>
                  <th>Consumer Number</th>
                  <th>Mobile No.</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((item,i) => (
                  <tr key={item._id}>
                  <td>{((currentPage  - 1) * itemsPerPage ) + i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.consumer_number}</td>
                    <td>{item.mobile}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#0295B6",
                          border: "none",
                          padding: "7px",
                          cursor: "pointer",
                          alignItems:"center"
                        }}
                      >
                        <Link
                          to={`/views/${item._id}`}
                          state={{ id: item._id }}
                          className="link-btn"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Details
                        </Link>
                        
                      </button>
                      <button
                        style={{
                          marginLeft:"10px",
                          backgroundColor: "#0295B6",
                          border: "none",
                          padding: "7px",
                          cursor: "pointer",
                          alignItems:"center"
                        }}
                        onClick={()=>deleteUser(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    alignItems:"center",
                    backgroundColor:
                      number === currentPage ? "#0295B6" : "#f0f0f0",
                    color: number === currentPage ? "white" : "black",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
    </div>
  );
};

export default Details;
