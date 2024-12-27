import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProformaA from "./ProformaA";
import Model from "./Model";


function Views() {
  const [user, setUser] = useState(null)
  const [currentViewPage, setCurrenttViewPage] = useState(null)
  const data = [
    { name: "WCR" , path:'/editwcr'},
    { name: "annexure1" , path:'/editAnnexure1'},
  {name:"selfdecleration",path:'/editSelfDecleration'},
    { name: "connectionAgreement" , path:'/editConnectionAggrement' },
    { name: "modelagreement" , path:'/editModelAgreement' },
  ];
  let params = useParams()

  const styles = {


    content: {




      width: "75%",
      float: "inline-end"



    },
    table: {
      width: "80%",
      borderCollapse: "collapse",
      margin: "0 auto",
    },
    th: {
      backgroundColor: "#0295B6",
      color: "white",
      textAlign: "left",
      padding: "12px 15px",
      border: "1px solid #ddd",
    },
    td: {
      textAlign: "center",
      padding: "12px 15px",
      border: "1px solid #ddd",
    },
    trEven: {
      backgroundColor: "#f9f9f9",
    },
    trHover: {
      backgroundColor: "#f1f1f1",
    },
    button: {
      padding: "8px 15px",
      margin: "5px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      // backgroundColor:"#f9f9f9"
    },
    downloadButton: {
      backgroundColor: "#0295B6",
      color: "white",
    },
    printButton: {
      backgroundColor: "#0295B6",
      color: "white",
    },
    sidebarList: {
      listStyleType: "none",
      padding: 0,
    },
    sidebarListItem: {
      marginBottom: "10px",
      cursor: "pointer",
    },
  };

useEffect(()=>{
  console.log('====================================');
  console.log(user,'user details');
  console.log('====================================');
})
  let getData = async () => {
    let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${params.id}`)
    console.log("data", res.data)

    let { name,
      gst_number,
      charge_controller,
      consumer_number,
      site_location,
      category,
      cell_name,
      sanction_number,
      sanctioned_capacity,
      installed_capacity,
      module_make,
      almm_model,
      wattage_per_module,
      num_modules,
      total_capacity,
      warranty_details,
      inverter_make,
      rating,
      inverter_capacity,
      discom_name,
      discom_address,
      hpd,
      advance,
      before,after,
      manufacturing_year,
      earthings,
      lightning_arrester,
      signature,
      aadhar_number,
      aadharImage,
      mobile,
      email,
      sr_pv_no,
      installation_date,
      efficiency,
      declaration_date,
      discom,
      address,
      netmeter_date,
      second_address,
      consumer_name,
      shri,
  
      connection_date 
      ,rupees} = res.data.data

    let magan = {
      wcr: {
        name,

        consumer_number,
        site_location,
        category,
        sanction_number,
        sanctioned_capacity,
    
        module_make,
        almm_model,
        wattage_per_module,
        num_modules,
        total_capacity,
        warranty_details,
        inverter_make,
        rating,
        inverter_capacity,
        hpd,
        charge_controller,
        manufacturing_year,
        earthings,
        lightning_arrester,
        signature,
        discom_address,
        discom_name,
        installed_capacity,
        aadhar_number,
        aadharImage
      },
      annaxure1: {
        name,
        consumer_number,
        mobile,
        email,
        site_location,
        sanctioned_capacity,
      
        installation_date,
        inverter_capacity,
        inverter_make,
        num_modules,
        total_capacity,
        connection_date,signature

      },

      self_declaration: {
        total_capacity,
        discom_name,
        site_location,
        sanction_number,
        declaration_date,
        sr_pv_no,
        wattage_per_module,
        num_modules,
        inverter_make,
        cell_name,
        gst_number,
      },
      connection_agreement: {
        address,
        site_location,
        netmeter_date,
        name,
        signature,
        consumer_number,
        second_address,
        consumer_name,
        discom_address,
        total_capacity,
        shri
      },
      model_aggrement: {
        consumer_number,
        discom_name,
        discom_address,
        address,
        total_capacity,
        module_make,
        inverter_make,
        efficiency,
        signature,
        rupees,
        advance,
        before,
        after

      }
    }
   
    setUser(magan)
  }
  useEffect(() => {
    getData();
  }, [])

  const handleDownload = (itemId) => {
    // const printContent = document.getElementById("printPage");

    // if (!printContent) {
    //   alert("Print page content not found!");
    //   return;
    // }

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFont("Calibri");
    doc.setFontSize(13);
    doc.text("Document Information", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    // doc.text(`Document Name: ${itemID}`, 20, 40);

    // Save the PDF
    doc.save(`${itemId}.pdf`);
  };
  const handlePrint = (itemId) => {
    alert(`Print ${itemID}`);
  };
  let handleShowModel = (title) => {
    setCurrenttViewPage(title)
  }
  


  // edit page navigate

  const navigate = useNavigate();

  const editpage = (path,id) =>{
    navigate(`${path}/${id}`)
  }

  return (
    <div style={styles.container}>
      {
        currentViewPage && <Model setCurrenttViewPage={setCurrenttViewPage} user={user} heading={currentViewPage} />
      }

      {/* Content Area */}
      <div style={styles.content}>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Document Name</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                style={index % 2 === 0 ? styles.trEven : null} // Alternating row color
              >
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>
                  <button
                    style={{ ...styles.button, ...styles.downloadButton }}
                    onClick={() => handleShowModel(item.name)}
                  >
                    View
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.downloadButton }}
                    onClick={() => editpage(item.path , params.id)}
                  >
                    Edit
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



export default Views;
