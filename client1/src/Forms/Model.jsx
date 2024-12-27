import React, { Component, useEffect, useState } from 'react'
// import { useScanning } from 'react-barcode-scanner'
import { IoCloseCircleOutline } from "react-icons/io5";
import WcrModel from '../Component/WcrModel'
import AnnexureModel from '../Component/AnnexureModel'
import ModelAgreeModel from '../Component/ModelAgreeModel'
import ConModel from '../Component/ConModel'
import SelfModel from '../Component/SelfModel';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from 'html2pdf.js';


const Model = ({ heading, user, setCurrenttViewPage }) => {
    const [component, setComponent] = useState()
    let [css, setCss] = useState('')
    useEffect(() => {
        console.log('====================================');
        console.log(user,);
        console.log('====================================');
        switch (heading) {
            case 'WCR':
                setComponent(<WcrModel user={user.wcr} />)
                setCss(` <style>
                @media print {
                    /* Remove default headers and footers */
                    @page {
                        margin: 0; /* Ensure no margin to avoid blank spaces */
                        size: A4;
                        padding:30px 50px;

                    }
    
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif; /* Optional: Make sure font is readable */
                    }
    
                    /* The content should start from the top with no extra margins */
                    .a4-page-content {
                        width: 794px; /* A4 width */
                        height: 1123px; /* A4 height */
                        padding: 20px; /* Set padding around the content */
                        margin: 0;
                        background-color: #fff;
                        page-break-before: auto;
                    }
    
                    .marginTop{
                        margin-top:130px !important;
                    }
                    /* Custom page styles */
                    .a4-page h3,
                    .a4-page h4 {
                        text-align: center;
                        font-weight: bold;
                        margin-top: 0; /* Remove margin-top */
                    }
    
                    .a4-page table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 10px;
                    }
    
                    .a4-page th,
                    .a4-page td {
                        padding: 8px;
                        text-align: left;
                        font-size: 13px;
                        border: 1px solid #ddd;
                    }
    
                    .a4-page th {
                        background-color: #f2f2f2;
                    }
    
                    .a4-page .signature-section {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;
                    }
    
                    .a4-page .signature-section img {
                        width: 200px;
                        height: 150px;
                    }
    
                    .a4-page .inline-container {
                        display: flex;
                        gap: 10px;
                    }
    
                    .a4-page .inline-container label {
                        font-weight: bold;
                    }
    
                    .a4-page th,
                    .a4-page .th {
                        text-align: center;
                    }
    
                    .a4-page .para {
                        text-align: justify;
                        font-size: 13px;
                    }
    
                    .a4-page .paraWrapper {
                        margin-top: 20px;
                    }
                        label{
                      margin-left: 30px;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
                        }
                }
            </style>`)
                break;
            case 'annexure1':
                setComponent(<AnnexureModel user={user.annaxure1} />)
                setCss(` <style>
                    @media print {
                        /* Remove default headers and footers */
                        @page {
                            margin: 0; /* Ensure no margin to avoid blank spaces */
                            size: A4;
                            padding:30px 50px;
                        }
        
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: Arial, sans-serif; /* Optional: Make sure font is readable */
                        }
        
                        /* The content should start from the top with no extra margins */
                        .a4-page-content {
                            width: 794px; /* A4 width */
                            height: 1123px; /* A4 height */
                            padding: 20px; /* Set padding around the content */
                            margin: 0;
                            background-color: #fff;
                            page-break-before: auto;
                        }
        
                      


.a4-page-annexure1 .header {
    text-align: center;
    color: grey;
    margin-bottom: 30px;
}

.a4-page-annexure1 h2 {
    font-size: 18px;
}

.a4-page-annexure1 h3,
.a4-page-annexure1 h5 {
    font-size: 14px;
}

.a4-page-annexure1 table.annexure {
    width: 100%;
    margin-top: 20px;
    border: none;

    border-collapse: collapse;
    font-size: 13px;
}

.a4-page-annexure1 tr {
    border: none;

}

.a4-page-annexure1 table.annexure th,
.a4-page-annexure1 table.annexure td {
    padding: 8px;
    text-align: left;
    border: none;
}

.a4-page-annexure1 table.annexure th {
    // background-color: #f2f2f2;
    font-weight: bold;
}

.a4-page-annexure1 table.annexure td {
    // border-bottom: 1px solid #ddd;
}

.a4-page-annexure1 .page-a4-proforma {
    // margin-top: 30px;
    padding: 20px;
    border-top: 1px solid #ddd;
}

.a4-page-annexure1 .page-a4-proforma h3 {
    font-size: 13px;
    color: black;
    text-align: center;
    // margin: 10px 0;
}

.a4-page-annexure1 .page-a4-proforma p {
    font-size: 13px;
    line-height: 1.6;
    text-align: justify;
}

.a4-page-annexure1 .signature-section {
    display: flex;
    justify-content: space-between;
   
}

.a4-page-annexure1 .signature-section div {
    width: 45%;
    text-align: center;
}

.a4-page-annexure1 .signature-section img {
    width: 200px;
    height: 150px;
}

.a4-page-annexure1 .signature-section label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
    font-size: 12px;
}

.a4-page-annexure1 h4 {
    font-size: 12px;
    line-height: 1.5;
    margin-top: 30px;
    text-align: left;
}

.a4-page-annexure1 b {
    font-weight: bold;
}
                    }
                </style>`)
                break;
            case 'selfdecleration':
                setComponent(<SelfModel user={user.self_declaration
                } />)
                setCss(` <style>
                @media print {
                    /* Remove default headers and footers */
                    @page {
                        margin: 0; /* Ensure no margin to avoid blank spaces */
                        size: A4;
                        padding:30px 50px;
                    }
               
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif; /* Optional: Make sure font is readable */
                    }
               
                    /* The content should start from the top with no extra margins */
                    .a4-page-content {
                        width: 794px; /* A4 width */
                        height: 1123px; /* A4 height */
                        padding: 20px; /* Set padding around the content */
                        margin: 0;
                        background-color: #fff;
                        page-break-before: auto;
                    }
               
                    * {
                    padding: 0;
                    margin: 0;
                }
                
                /* General Styles */
                body {
                    /* font-family: 'Montserrat', sans-serif; */
                    /* background-color: #f4f4f4; */
                    margin: 0;
                    padding: 0;
                }
                
                ul,
                li {
                    list-style-type: none;
                }
                
                .insideform H3 {
                    font-family: Calibri;
                }
                
                .next button {
                    width: 200px;
                    height: 70px;
                    background-color: grey;
                    color: white;
                
                    font-size: x-large;
                }
                
                .form-section h1 {
                    text-decoration: underline;
                }
                
                /* Sidebar Styling */
                .sidebar {
                    width: 20%;
                    /* float: left; */
                    background-color: #0295B6;
                    height: 100%;
                    position: fixed;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                }
                
                .sidebar .logo {
                    text-align: center;
                    padding: 20px;
                    border-bottom: 1px solid #495057;
                }
                
                .sidebar .logo img {
                    width: 50px;
                    height: auto;
                }
                
                .sidebar .sidebar-wrapper {
                    padding: 20px 0;
                }
                
                .sidebar .nav {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .sidebar .nav li {
                    margin-bottom: 10px;
                }
                
                .sidebar .nav a {
                    font-size: 20px;
                    color: black;
                    text-decoration: none;
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    transition: background 0.3s, color 0.3s;
                }
                
                /* .sidebar .nav  a li  {
                    margin-right: 10px;
                    font-size: 18px;
                } */
                
                .nav li a.active,
                .sidebar .nav a:hover {
                    color: black;
                    /* background-color:#a5e8f7; */
                }
                
                /* Main Panel Styling */
                .main-panel {
                    flex: 1;
                    margin-left: 250px;
                    background-color: #f8f9fa;
                    overflow: auto;
                    transition: margin-left 0.3s ease;
                }
                
                .navbar {
                    /* background-color: #343a40; */
                    color: #fff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 10px 20px;
                }
                
                .navbar .navbar-toggler {
                    background-color: #495057;
                    border: none;
                    cursor: pointer;
                }
                
                .navbar .navbar-toggler .navbar-toggler-bar {
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: #fff;
                    margin: 5px 0;
                }
                
                /* form */
                
                form,
                .detail {
                    width: 80%;
                    float: inline-end;
                    display: flex;
                    flex-direction: column;
                }
                
                
                .insideform {
                    padding: 20px;
                    width: 95%;
                }
                
                .form-section {
                    margin-bottom: 20px;
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                
                .form-section h3 {
                    margin-bottom: 10px;
                }
                
                label {
                    margin-left: 30px;
                    display: block;
                    margin-bottom: 5px;
                    /* font-weight: bold; */
                }
                
                input,
                select,
                textarea {
                    margin-left: 30px;
                    width: 90%;
                    padding: 8px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                
                textarea {
                    resize: vertical;
                }
                
                .form-footer {
                    text-align: center;
                }
                
                button {
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                span {
                    color: red;
                }
                
                .lines {
                    outline: none;
                    width: max-content;
                    border: none;
                    background-color: #F4F4F4;
                    border-bottom: 2px dotted black;
                    margin-left: 0px;
                    font-weight: bold;
                    overflow: visible;
                }
                
                .inline-container {
                    display: flex;
                    /* align-items: center; */
                    gap: 10px;
                    /* Space between elements */
                    margin-bottom: 15px;
                }
                
                /* Image preview container */
                .image-preview-container {
                    width: 150px;
                    height: 150px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    overflow: hidden;
                    display: flex !important;
                    justify-content: center;
                    align-items: center;
                    background-color: #f4f4f4;
                    cursor: pointer;
                    margin-bottom: 10px;
                }
                
                .image-preview-container img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                
                /* Aadhar card */
                .aadhar-img {
                    width: "100px";
                    height: "100px";
                    object-fit: "cover";
                }
                
                /* Annexure-I table */
                .annexure>tr>td {
                    padding: 10px 10px;
                }
                
                .annexure>tr>th {
                    text-align: left;
                }
                
                .annexure>tr>td>input {
                    margin: 0;
                }
                
                
                .product {
                    display: flex;
                    justify-content: space-between;
                    padding: 15px;
                    box-shadow: 0 3px 10px rgb(220, 220, 220);
                    margin: 10px 0;
                }
                
                
                @media print {
                    .page-break {
                        page-break-after: always;
                    }
                
                    .no-break {
                        page-break-inside: avoid;
                    }
                }
                
                /* .center {
                    text-align: center;
                } */
                
                /* Dashboard CSS */
                
                .dashboard {
                    width: 80%;
                    float: inline-end;
                }
                
                .dash {
                    display: flex;
                    flex-wrap: wrap;
                }
                
                .dash-click {
                    margin: 30px;
                }
                
                .toggle {
                    visibility: collapse;
                }
                
                .toggle-btn {
                    visibility: hidden;
                }
                
                .dash-a {
                    text-decoration: none;
                
                }
                
                .dash-a li:hover {
                    color: black;
                    background-color: #a5e8f7;
                }
                
                .dash-board {
                    background-color:#7ed6ea;
                    color: black;
                    list-style-type: none;
                    text-align: center;
                    padding: 1em 1em;
                    margin: 5px 5px;
                    border-radius: 10px;
                }
                
                
                /* common css for dashboard, form, details */
                @media screen and (max-width: 500px) {
                    form {
                        width: 100%;
                    }
                
                    input,
                    textarea,
                    select {
                        width: 80%;
                    }
                
                    /* navigation bar */
                    .sidebar {
                        transform: translateX(-200%);
                    }
                
                    .toggle {
                        visibility: visible;
                    }
                
                    /* Button to toggle the dropdown */
                    .toggle-btn {
                        visibility: visible;
                        margin: 1em;
                        padding: 10px 12px;
                        background-color: #343a40;
                        color: white;
                        border: none;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 16px;
                        position: fixed;
                        top: 0;
                        left: 0;
                    }
                
                    /* Dropdown container */
                    .toggle {
                        margin: 4em 0 0 10px;
                        background-color: #f8f9fa;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        width: 80%;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        position: fixed;
                        z-index: 1000;
                    }
                
                    /* Dropdown wrapper for padding */
                    .toggle-wrapper {
                        padding: 10px;
                        /* margin-top: 20px; */
                        background-color: #343a40;
                    }
                
                    /* List styling inside dropdown */
                    .toggleNav {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        background-color: #686868;
                    }
                
                    .toggleNav li {
                        padding: 5px;
                    }
                
                    .toggleNav a {
                        color: white;
                        text-decoration: none;
                    }
                
                    .toggleNav li:hover {
                        background-color: #343a40;
                    }
                
                    /* Anchor link styling */
                    .toogleNav a {
                        color: #007BFF;
                        text-decoration: none;
                        font-size: 14px;
                    }
                
                    .toogleNav a:hover {
                        text-decoration: underline;
                    }
                
                    /* dashboard */
                    .dashboard {
                        width: 80%;
                        float: inline-end;
                
                
                    }
                
                    .insideform {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10px;
                        width: 100%;
                
                    }
                
                    .dash {
                        display: flex;
                        flex-wrap: wrap;
                    }
                
                    .dash-click {
                        margin: 10px;
                    }
                
                    .stampsign {
                        display: flex;
                        flex-direction: column;
                
                    }
                }
                
                
                /* .dashboard css */
                .button-container {
                    display: flex;
                    margin: 50px;
                    justify-content: space-between;
                    /* gap: 1rem; */
                    /* flex-wrap: wrap; */
                }
                
                .btns {
                
                    width: 40%;
                    height: 150px;
                    padding-top: 70px;
                    font-size: 30px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                
                    text-align: center;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                /* Button colors */
                .blue-btn {
                    background-color: #007bff;
                    color: white;
                }
                
                .green-btn {
                    background-color: #28a745;
                    color: white;
                }
                
                /* Hover effects */
                .btn:hover {
                    opacity: 0.9;
                }
                
                /* Responsive styling */
                @media (max-width: 768px) {
                    .button-container {
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                        flex-wrap: wrap;
                        margin: 1rem 0;
                        /* flex-direction: column; */
                        align-items: center;
                    }
                
                    .btns {
                        padding: 0.8rem 1.2rem;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        width: 100%;
                        margin: 0 5%;
                        text-align: center;
                        width: 90%;
                        text-align: center;
                    }
                
                    /* Button colors */
                    .blue-btn {
                        background-color: #007bff;
                        color: white;
                    }
                
                    .green-btn {
                        background-color: #28a745;
                        color: white;
                    }
                }
                
                
                /* table details */
                
                .user-table {
                
                    border: 1px solid;
                    border-collapse: collapse;
                    width: 100%;
                    padding: 2px;
                
                }
                
                .user-table th {
                    padding: 7px;
                    border: 1px solid grey;
                }
                
                .user-table td {
                    padding: 7px;
                    border: 1px solid;
                    text-align: center;
                }
                 
                /* 
                model aggremennt */
                /* General Styles */
                
                h1,
                h3,
                h4 {
                    /* text-align: center; */
                    color:black;
                }
                
                h4.center,
                h3.center {
                    text-align: center;
                }
                
                /* Agreement Container */
                .agreement-container {
                    /* max-width: 1200px; */
                    margin: 10px;
                    /* padding: 20px; */
                
                
                }
                
                /* Text and Paragraph Styles */
                p {
                    margin: 10px 0;
                    font-size: 1.1em;
                }
                
                /* List Styling */
                ul,
                ol {
                    margin: 20px 0;
                    padding-left: 20px;
                }
                
                ul li,
                ol li {
                    margin-bottom: 10px;
                }
                
                /* Section Styling */
                section {
                    margin-bottom: 20px;
                }
                
                /* Responsive Layout */
                @media only screen and (max-width: 768px) {
                
                    /* Make text slightly smaller for mobile */
                    h1 {
                        font-size: 1.5em;
                    }
                
                    h3,
                    h4 {
                        font-size: 1.2em;
                    }
                
                    p {
                        font-size: 1em;
                    }
                
                    .agreement-container {
                        padding: 15px;
                    }
                
                    /* Center the lists and adjust margins */
                    ul,
                    ol {
                        padding-left: 15px;
                    }
                
                    /* For headers that are centered */
                    .center {
                        text-align: center;
                    }
                }
                
                @media only screen and (max-width: 480px) {
                
                    /* Make text even smaller for very small screens */
                    h1 {
                        font-size: 1.2em;
                    }
                
                    h3,
                    h4 {
                        font-size: 1em;
                    }
                
                    p {
                        font-size: 0.9em;
                    }
                
                    .agreement-container {
                        padding: 10px;
                    }
                
                    /* Make the content more compact */
                    section {
                        margin-bottom: 15px;
                    }
                
                    /* For smaller screens, reduce spacing on lists */
                    ul li,
                    ol li {
                        margin-bottom: 8px;
                    }
                }
                
                /* ----------------------------------------------- */
                
                /* print-format */
                .printformat {
                    font-size: 13px;
                    font-family: Calibri;
                }
                
                
                /* model start  */
                .model {
                    height: 100vh;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.22);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                }
                
                .model>div {
                    background-color: WHITE;
                    padding: 20px;
                
                    margin: 10px;
                    height: 80vh;
                    overflow: auto;
                    width: 1000px;
                }
                
                .model .closeicon {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    font-size: 40px;
                    color: white;
                }
                
                /* model end  */
                
                
                
                /* wcr model css   */
                .a4-page {
                    width: 794px;
                
                    /* background-color: red !important; */
                    /* A4 width in pixels */
                    /* height: 1123px; */
                    /* A4 height in pixels */
                    margin: 0 auto;
                    padding: 0 50px;
                    /* Adjust as needed for inner spacing */
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                    background-color: #fff;
                    page-break-before: always;
                }
                
                .a4-page h3,
                .a4-page h4 {
                    text-align: center;
                
                }
                
                .a4-page h4.left {
                    margin: 10px;
                    text-align: left;
                    color: black;
                }
                
                .a4-page p {
                    text-align: justify;
                    font-size: 13px
                }
                
                .page-a4-proforma {
                    font-size: 13px;
                }
                
                .page-a4-proforma p {
                    justify-content: center;
                
                }
                
                
                .a4-page table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                
                .a4-page th,
                .a4-page td {
                    padding: 8px;
                    text-align: left;
                    font-size: 13px;
                    border: 1px solid #ddd;
                }
                
                .a4-page th {
                    background-color: #f2f2f2;
                }
                
                .a4-page .signature-section {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
                
                .a4-page .signature-section img {
                    width: 200px;
                    height: 150px;
                }
                
                .a4-page .inline-container {
                    display: flex;
                    gap: 10px;
                }
                
                .a4-page .inline-container label {
                    font-weight: bold;
                }
                
                .a4-page th,
                .a4-page .th {
                    text-align: center;
                }
                
                .a4-page .para {
                    text-align: justify;
                    font-size: 13px;
                }
                
                .a4-page .paraWrapper {
                    margin-top: 20px;
                }
                
                
                
                /* annexure1  */
                .a4-page-annexure1 {
                    width: 794px;
                    /* A4 width in mm */
                    /* height: 1123px; */
                    /* A4 height in mm */
                    /* background-color: red !important; */
                    margin: 0 auto;
                    padding: 20px;
                    box-sizing: border-box;
                    background-color: #fff;
                    font-family: Arial, sans-serif;
                }
                
                .a4-page-annexure1 .header {
                    text-align: center;
                    color: grey;
                    margin-bottom: 30px;
                }
                
                .a4-page-annexure1 h2 {
                    font-size: 18px;
                }
                
                .a4-page-annexure1 h3,
                .a4-page-annexure1 h5 {
                    font-size: 14px;
                }
                
                .a4-page-annexure1 table.annexure {
                    width: 100%;
                    margin-top: 20px;
                    border: none;
                
                    border-collapse: collapse;
                    font-size: 13px;
                }
                
                .a4-page-annexure1 tr {
                    border: none;
                
                }
                
                .a4-page-annexure1 table.annexure th,
                .a4-page-annexure1 table.annexure td {
                    padding: 8px;
                    text-align: left;
                    border: none;
                }
                
                .a4-page-annexure1 table.annexure th {
                    /* background-color: #f2f2f2; */
                    font-weight: bold;
                }
                
                
                
                
                .a4-page-annexure1 .page-a4-proforma {
                    /* margin-top: 30px; */
                    padding: 20px;
                    border-top: 1px solid #ddd;
                }
                
                .a4-page-annexure1 .page-a4-proforma h3 {
                    font-size: 13px;
                    color: black;
                    text-align: center;
                    /* margin: 10px 0; */
                }
                
                .a4-page-annexure1 .page-a4-proforma p {
                    font-size: 13px;
                    line-height: 1.6;
                    text-align: justify;
                }
                
                .a4-page-annexure1 .signature-section {
                    display: flex;
                    justify-content: space-between;
                    /* margin-top: 40px; */
                }
                
                .a4-page-annexure1 .signature-section div {
                    width: 45%;
                    text-align: center;
                }
                
                .a4-page-annexure1 .signature-section img {
                    width: 200px;
                    height: 150px;
                }
                
                .a4-page-annexure1 .signature-section label {
                    display: block;
                    margin-top: 10px;
                    font-weight: bold;
                    font-size: 12px;
                }
                
                .a4-page-annexure1 h4 {
                    font-size: 12px;
                    line-height: 1.5;
                    margin-top: 30px;
                    text-align: left;
                }
                
                .a4-page-annexure1 b {
                    font-weight: bold;
                }
                
                /* annexure1  */
                
                
                /* self declar */
                
                
                .a4-page-selfdeclar{
                    width: 794px;
                    font-size: 13px;
                    margin: auto;
                }
                .a4-page-selfdeclar h3{
                    text-align: left;
                }
                
                
                
                
                /* self declar */
                
                
                /* connectionagreement */
                .a4-page-connectionagreement{
                    font-size: 13px;
                    width: 794px;
                    margin: auto;
                }
                
                
                
                
                
                /* connectionagreement */
                
                .a4-page-agreement-container{
                    font-size: 13px;
                    width: 794px;
                    margin: auto;
                 
                }
                
                .a4-page-selfdeclar .text-left{
                    text-align: left;
                    font-weight: 400;
                }
                .a4-page-selfdeclar table{
                    margin-left: 30px;
                }
                
                .a4-page-selfdeclar .signatureContent{
                
                    width: fit-content;
                    margin-left: auto;
                }
                .a4-page-selfdeclar .inline-container{
                    margin-bottom: 0;
                }
                .a4-page-selfdeclar .inline-container label{
                    margin-left: 0;
                }
                
               
                }
               </style>`)
                break;
            case 'connectionAgreement':
                setComponent(<ConModel user={user.connection_agreement} />)
                setCss(` <style>
                @media print {
                    /* Remove default headers and footers */
                    @page {
                        margin: 0; /* Ensure no margin to avoid blank spaces */
                        size: A4;
                        padding:30px 50px;
                    }
               
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif; /* Optional: Make sure font is readable */
                    }
               
                    /* The content should start from the top with no extra margins */
                    .a4-page-content {
                        width: 794px; /* A4 width */
                        height: 1123px; /* A4 height */
                        padding: 20px; /* Set padding around the content */
                        margin: 0;
                        background-color: #fff;
                        page-break-before: auto;
                    }
               
                    * {
                    padding: 0;
                    margin: 0;
                }
                
                /* General Styles */
                body {
                    /* font-family: 'Montserrat', sans-serif; */
                    /* background-color: #f4f4f4; */
                    margin: 0;
                    padding: 0;
                }
                
                ul,
                li {
                    list-style-type: none;
                }
                
                .insideform H3 {
                    font-family: Calibri;
                }
                
                .next button {
                    width: 200px;
                    height: 70px;
                    background-color: grey;
                    color: white;
                
                    font-size: x-large;
                }
                
                .form-section h1 {
                    text-decoration: underline;
                }
                
                /* Sidebar Styling */
                .sidebar {
                    width: 20%;
                    /* float: left; */
                    background-color: #0295B6;
                    height: 100%;
                    position: fixed;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                }
                
                .sidebar .logo {
                    text-align: center;
                    padding: 20px;
                    border-bottom: 1px solid #495057;
                }
                
                .sidebar .logo img {
                    width: 50px;
                    height: auto;
                }
                
                .sidebar .sidebar-wrapper {
                    padding: 20px 0;
                }
                
                .sidebar .nav {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .sidebar .nav li {
                    margin-bottom: 10px;
                }
                
                .sidebar .nav a {
                    font-size: 20px;
                    color: black;
                    text-decoration: none;
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    transition: background 0.3s, color 0.3s;
                }
                
                /* .sidebar .nav  a li  {
                    margin-right: 10px;
                    font-size: 18px;
                } */
                
                .nav li a.active,
                .sidebar .nav a:hover {
                    color: black;
                    /* background-color:#a5e8f7; */
                }
                
                /* Main Panel Styling */
                .main-panel {
                    flex: 1;
                    margin-left: 250px;
                    background-color: #f8f9fa;
                    overflow: auto;
                    transition: margin-left 0.3s ease;
                }
                
                .navbar {
                    /* background-color: #343a40; */
                    color: #fff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 10px 20px;
                }
                
                .navbar .navbar-toggler {
                    background-color: #495057;
                    border: none;
                    cursor: pointer;
                }
                
                .navbar .navbar-toggler .navbar-toggler-bar {
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: #fff;
                    margin: 5px 0;
                }
                
                /* form */
                
                form,
                .detail {
                    width: 80%;
                    float: inline-end;
                    display: flex;
                    flex-direction: column;
                }
                
                
                .insideform {
                    padding: 20px;
                    width: 95%;
                }
                
                .form-section {
                    margin-bottom: 20px;
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                
                .form-section h3 {
                    margin-bottom: 10px;
                }
                
                label {
                    margin-left: 30px;
                    display: block;
                    margin-bottom: 5px;
                    /* font-weight: bold; */
                }
                
                input,
                select,
                textarea {
                    margin-left: 30px;
                    width: 90%;
                    padding: 8px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                
                textarea {
                    resize: vertical;
                }
                
                .form-footer {
                    text-align: center;
                }
                
                button {
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                span {
                    color: red;
                }
                
                .lines {
                    outline: none;
                    width: max-content;
                    border: none;
                    background-color: #F4F4F4;
                    border-bottom: 2px dotted black;
                    margin-left: 0px;
                    font-weight: bold;
                    overflow: visible;
                }
                
                .inline-container {
                    display: flex;
                    /* align-items: center; */
                    gap: 10px;
                    /* Space between elements */
                    margin-bottom: 15px;
                }
                
                /* Image preview container */
                .image-preview-container {
                    width: 150px;
                    height: 150px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    overflow: hidden;
                    display: flex !important;
                    justify-content: center;
                    align-items: center;
                    background-color: #f4f4f4;
                    cursor: pointer;
                    margin-bottom: 10px;
                }
                
                .image-preview-container img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                
                /* Aadhar card */
                .aadhar-img {
                    width: "100px";
                    height: "100px";
                    object-fit: "cover";
                }
                
                /* Annexure-I table */
                .annexure>tr>td {
                    padding: 10px 10px;
                }
                
                .annexure>tr>th {
                    text-align: left;
                }
                
                .annexure>tr>td>input {
                    margin: 0;
                }
                
                
                .product {
                    display: flex;
                    justify-content: space-between;
                    padding: 15px;
                    box-shadow: 0 3px 10px rgb(220, 220, 220);
                    margin: 10px 0;
                }
                
                
                @media print {
                    .page-break {
                        page-break-after: always;
                    }
                
                    .no-break {
                        page-break-inside: avoid;
                    }
                }
                
                /* .center {
                    text-align: center;
                } */
                
                /* Dashboard CSS */
                
                .dashboard {
                    width: 80%;
                    float: inline-end;
                }
                
                .dash {
                    display: flex;
                    flex-wrap: wrap;
                }
                
                .dash-click {
                    margin: 30px;
                }
                
                .toggle {
                    visibility: collapse;
                }
                
                .toggle-btn {
                    visibility: hidden;
                }
                
                .dash-a {
                    text-decoration: none;
                
                }
                
                .dash-a li:hover {
                    color: black;
                    background-color: #a5e8f7;
                }
                
                .dash-board {
                    background-color:#7ed6ea;
                    color: black;
                    list-style-type: none;
                    text-align: center;
                    padding: 1em 1em;
                    margin: 5px 5px;
                    border-radius: 10px;
                }
                
                
                /* common css for dashboard, form, details */
                @media screen and (max-width: 500px) {
                    form {
                        width: 100%;
                    }
                
                    input,
                    textarea,
                    select {
                        width: 80%;
                    }
                
                    /* navigation bar */
                    .sidebar {
                        transform: translateX(-200%);
                    }
                
                    .toggle {
                        visibility: visible;
                    }
                
                    /* Button to toggle the dropdown */
                    .toggle-btn {
                        visibility: visible;
                        margin: 1em;
                        padding: 10px 12px;
                        background-color: #343a40;
                        color: white;
                        border: none;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 16px;
                        position: fixed;
                        top: 0;
                        left: 0;
                    }
                
                    /* Dropdown container */
                    .toggle {
                        margin: 4em 0 0 10px;
                        background-color: #f8f9fa;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        width: 80%;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        position: fixed;
                        z-index: 1000;
                    }
                
                    /* Dropdown wrapper for padding */
                    .toggle-wrapper {
                        padding: 10px;
                        /* margin-top: 20px; */
                        background-color: #343a40;
                    }
                
                    /* List styling inside dropdown */
                    .toggleNav {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        background-color: #686868;
                    }
                
                    .toggleNav li {
                        padding: 5px;
                    }
                
                    .toggleNav a {
                        color: white;
                        text-decoration: none;
                    }
                
                    .toggleNav li:hover {
                        background-color: #343a40;
                    }
                
                    /* Anchor link styling */
                    .toogleNav a {
                        color: #007BFF;
                        text-decoration: none;
                        font-size: 14px;
                    }
                
                    .toogleNav a:hover {
                        text-decoration: underline;
                    }
                
                    /* dashboard */
                    .dashboard {
                        width: 80%;
                        float: inline-end;
                
                
                    }
                
                    .insideform {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10px;
                        width: 100%;
                
                    }
                
                    .dash {
                        display: flex;
                        flex-wrap: wrap;
                    }
                
                    .dash-click {
                        margin: 10px;
                    }
                
                    .stampsign {
                        display: flex;
                        flex-direction: column;
                
                    }
                }
                
                
                /* .dashboard css */
                .button-container {
                    display: flex;
                    margin: 50px;
                    justify-content: space-between;
                    /* gap: 1rem; */
                    /* flex-wrap: wrap; */
                }
                
                .btns {
                
                    width: 40%;
                    height: 150px;
                    padding-top: 70px;
                    font-size: 30px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                
                    text-align: center;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                /* Button colors */
                .blue-btn {
                    background-color: #007bff;
                    color: white;
                }
                
                .green-btn {
                    background-color: #28a745;
                    color: white;
                }
                
                /* Hover effects */
                .btn:hover {
                    opacity: 0.9;
                }
                
                /* Responsive styling */
                @media (max-width: 768px) {
                    .button-container {
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                        flex-wrap: wrap;
                        margin: 1rem 0;
                        /* flex-direction: column; */
                        align-items: center;
                    }
                
                    .btns {
                        padding: 0.8rem 1.2rem;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        width: 100%;
                        margin: 0 5%;
                        text-align: center;
                        width: 90%;
                        text-align: center;
                    }
                
                    /* Button colors */
                    .blue-btn {
                        background-color: #007bff;
                        color: white;
                    }
                
                    .green-btn {
                        background-color: #28a745;
                        color: white;
                    }
                }
                
                
                /* table details */
                
                .user-table {
                
                    border: 1px solid;
                    border-collapse: collapse;
                    width: 100%;
                    padding: 2px;
                
                }
                
                .user-table th {
                    padding: 7px;
                    border: 1px solid grey;
                }
                
                .user-table td {
                    padding: 7px;
                    border: 1px solid;
                    text-align: center;
                }
                 
                /* 
                model aggremennt */
                /* General Styles */
                
                h1,
                h3,
                h4 {
                    /* text-align: center; */
                    color:black;
                }
                
                h4.center,
                h3.center {
                    text-align: center;
                }
                
                /* Agreement Container */
                .agreement-container {
                    /* max-width: 1200px; */
                    margin: 10px;
                    /* padding: 20px; */
                
                
                }
                
                /* Text and Paragraph Styles */
                p {
                    margin: 10px 0;
                    font-size: 1.1em;
                }
                
                /* List Styling */
                ul,
                ol {
                    margin: 20px 0;
                    padding-left: 20px;
                }
                
                ul li,
                ol li {
                    margin-bottom: 10px;
                }
                
                /* Section Styling */
                section {
                    margin-bottom: 20px;
                }
                
                /* Responsive Layout */
                @media only screen and (max-width: 768px) {
                
                    /* Make text slightly smaller for mobile */
                    h1 {
                        font-size: 1.5em;
                    }
                
                    h3,
                    h4 {
                        font-size: 1.2em;
                    }
                
                    p {
                        font-size: 1em;
                    }
                
                    .agreement-container {
                        padding: 15px;
                    }
                
                    /* Center the lists and adjust margins */
                    ul,
                    ol {
                        padding-left: 15px;
                    }
                
                    /* For headers that are centered */
                    .center {
                        text-align: center;
                    }
                }
                
                @media only screen and (max-width: 480px) {
                
                    /* Make text even smaller for very small screens */
                    h1 {
                        font-size: 1.2em;
                    }
                
                    h3,
                    h4 {
                        font-size: 1em;
                    }
                
                    p {
                        font-size: 0.9em;
                    }
                
                    .agreement-container {
                        padding: 10px;
                    }
                
                    /* Make the content more compact */
                    section {
                        margin-bottom: 15px;
                    }
                
                    /* For smaller screens, reduce spacing on lists */
                    ul li,
                    ol li {
                        margin-bottom: 8px;
                    }
                }
                
                /* ----------------------------------------------- */
                
                /* print-format */
                .printformat {
                    font-size: 13px;
                    font-family: Calibri;
                }
                
                
                /* model start  */
                .model {
                    height: 100vh;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.22);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                }
                
                .model>div {
                    background-color: WHITE;
                    padding: 20px;
                
                    margin: 10px;
                    height: 80vh;
                    overflow: auto;
                    width: 1000px;
                }
                
                .model .closeicon {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    font-size: 40px;
                    color: white;
                }
                
                /* model end  */
                
                
                
                /* wcr model css   */
                .a4-page {
                    width: 794px;
                
                    /* background-color: red !important; */
                    /* A4 width in pixels */
                    /* height: 1123px; */
                    /* A4 height in pixels */
                    margin: 0 auto;
                    padding: 0 50px;
                    /* Adjust as needed for inner spacing */
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                    background-color: #fff;
                    page-break-before: always;
                }
                
                .a4-page h3,
                .a4-page h4 {
                    text-align: center;
                
                }
                
                .a4-page h4.left {
                    margin: 10px;
                    text-align: left;
                    color: black;
                }
                
                .a4-page p {
                    text-align: justify;
                    font-size: 13px
                }
                
                .page-a4-proforma {
                    font-size: 13px;
                }
                
                .page-a4-proforma p {
                    justify-content: center;
                
                }
                
                
                .a4-page table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                
                .a4-page th,
                .a4-page td {
                    padding: 8px;
                    text-align: left;
                    font-size: 13px;
                    border: 1px solid #ddd;
                }
                
                .a4-page th {
                    background-color: #f2f2f2;
                }
                
                .a4-page .signature-section {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
                
                .a4-page .signature-section img {
                    width: 200px;
                    height: 150px;
                }
                
                .a4-page .inline-container {
                    display: flex;
                    gap: 10px;
                }
                
                .a4-page .inline-container label {
                    font-weight: bold;
                }
                
                .a4-page th,
                .a4-page .th {
                    text-align: center;
                }
                
                .a4-page .para {
                    text-align: justify;
                    font-size: 13px;
                }
                
                .a4-page .paraWrapper {
                    margin-top: 20px;
                }
                
                
                
                /* annexure1  */
                .a4-page-annexure1 {
                    width: 794px;
                    /* A4 width in mm */
                    /* height: 1123px; */
                    /* A4 height in mm */
                    /* background-color: red !important; */
                    margin: 0 auto;
                    padding: 20px;
                    box-sizing: border-box;
                    background-color: #fff;
                    font-family: Arial, sans-serif;
                }
                
                .a4-page-annexure1 .header {
                    text-align: center;
                    color: grey;
                    margin-bottom: 30px;
                }
                
                .a4-page-annexure1 h2 {
                    font-size: 18px;
                }
                
                .a4-page-annexure1 h3,
                .a4-page-annexure1 h5 {
                    font-size: 14px;
                }
                
                .a4-page-annexure1 table.annexure {
                    width: 100%;
                    margin-top: 20px;
                    border: none;
                
                    border-collapse: collapse;
                    font-size: 13px;
                }
                
                .a4-page-annexure1 tr {
                    border: none;
                
                }
                
                .a4-page-annexure1 table.annexure th,
                .a4-page-annexure1 table.annexure td {
                    padding: 8px;
                    text-align: left;
                    border: none;
                }
                
                .a4-page-annexure1 table.annexure th {
                    /* background-color: #f2f2f2; */
                    font-weight: bold;
                }
                
                
                
                
                .a4-page-annexure1 .page-a4-proforma {
                    /* margin-top: 30px; */
                    padding: 20px;
                    border-top: 1px solid #ddd;
                }
                
                .a4-page-annexure1 .page-a4-proforma h3 {
                    font-size: 13px;
                    color: black;
                    text-align: center;
                    /* margin: 10px 0; */
                }
                
                .a4-page-annexure1 .page-a4-proforma p {
                    font-size: 13px;
                    line-height: 1.6;
                    text-align: justify;
                }
                
                .a4-page-annexure1 .signature-section {
                    display: flex;
                    justify-content: space-between;
                    /* margin-top: 40px; */
                }
                
                .a4-page-annexure1 .signature-section div {
                    width: 45%;
                    text-align: center;
                }
                
                .a4-page-annexure1 .signature-section img {
                    width: 200px;
                    height: 150px;
                }
                
                .a4-page-annexure1 .signature-section label {
                    display: block;
                    margin-top: 10px;
                    font-weight: bold;
                    font-size: 12px;
                }
                
                .a4-page-annexure1 h4 {
                    font-size: 12px;
                    line-height: 1.5;
                    margin-top: 30px;
                    text-align: left;
                }
                
                .a4-page-annexure1 b {
                    font-weight: bold;
                }
                
                /* annexure1  */
                
                
                /* self declar */
                
                
                .a4-page-selfdeclar{
                    width: 794px;
                    font-size: 13px;
                    margin: auto;
                }
                .a4-page-selfdeclar h3{
                    text-align: left;
                }
                
                
                
                
                /* self declar */
                
                
                /* connectionagreement */
                .a4-page-connectionagreement{
                    font-size: 13px;
                    width: 794px;
                    margin: auto;
                }
                
                
                
                
                
                /* connectionagreement */
                
                .a4-page-agreement-container{
                    font-size: 13px;
                    width: 794px;
                    margin: auto;
                 
                }
                
                .a4-page-selfdeclar .text-left{
                    text-align: left;
                    font-weight: 400;
                }
                .a4-page-selfdeclar table{
                    margin-left: 30px;
                }
                
                .a4-page-selfdeclar .signatureContent{
                
                    width: fit-content;
                    margin-left: auto;
                }
                .a4-page-selfdeclar .inline-container{
                    margin-bottom: 0;
                }
                .a4-page-selfdeclar .inline-container label{
                    margin-left: 0;
                }
                
               
                }
               </style>`)
                break;
            case 'modelagreement':
                setComponent(<ModelAgreeModel user={user.model_aggrement} />)
                setCss(` <style>
                @media print {
                    /* Remove default headers and footers */
                    @page {
                        margin: 0; /* Ensure no margin to avoid blank spaces */
                        size: A4;
                    }
                    

                    @media print {
                        body {
                            margin: 0;
                            padding: 0;
                        }
                    
                        .a4-page-content {
                            width: 794px; /* A4 width */
                            height: 1123px; /* A4 height */
                            padding: 20px; /* Set padding around the content */
                            margin: 0;
                            background-color: #fff;
                            page-break-before: auto;
                        }
                    
                        .a4-page-agreement-container {
                            width: 794px;
                            margin: 50px; /* Adjust margin as needed */
                            padding: 50px; /* Adjust padding as needed */
                        }
               
                        /* Reset margins and paddings for general elements */
                        * {
                            padding: 0;
                            margin: 0;
                        }
                  
                    
                
                ul,
                li {
                    list-style-type: none;
                }
                
                .insideform H3 {
                    font-family: Calibri;
                }
                
                .next button {
                    width: 200px;
                    height: 70px;
                    background-color: grey;
                    color: white;
                
                    font-size: x-large;
                }
                
                .form-section h1 {
                    text-decoration: underline;
                }
                
                /* Sidebar Styling */
                .sidebar {
                    width: 20%;
                    /* float: left; */
                    background-color: #0295B6;
                    height: 100%;
                    position: fixed;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                }
                
                .sidebar .logo {
                    text-align: center;
                    padding: 20px;
                    border-bottom: 1px solid #495057;
                }
                
                .sidebar .logo img {
                    width: 50px;
                    height: auto;
                }
                
                .sidebar .sidebar-wrapper {
                    padding: 20px 0;
                }
                
                .sidebar .nav {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .sidebar .nav li {
                    margin-bottom: 10px;
                }
                
                .sidebar .nav a {
                    font-size: 20px;
                    color: black;
                    text-decoration: none;
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    transition: background 0.3s, color 0.3s;
                }
                
                /* .sidebar .nav  a li  {
                    margin-right: 10px;
                    font-size: 18px;
                } */
                
                .nav li a.active,
                .sidebar .nav a:hover {
                    color: black;
                    /* background-color:#a5e8f7; */
                }
                
                /* Main Panel Styling */
                .main-panel {
                    flex: 1;
                    margin-left: 250px;
                    background-color: #f8f9fa;
                    overflow: auto;
                    transition: margin-left 0.3s ease;
                }
                
                .navbar {
                    /* background-color: #343a40; */
                    color: #fff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 10px 20px;
                }
                
                .navbar .navbar-toggler {
                    background-color: #495057;
                    border: none;
                    cursor: pointer;
                }
                
                .navbar .navbar-toggler .navbar-toggler-bar {
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: #fff;
                    margin: 5px 0;
                }
                
                /* form */
                
                form,
                .detail {
                    width: 80%;
                    float: inline-end;
                    display: flex;
                    flex-direction: column;
                }
                
                
                .insideform {
                    padding: 20px;
                    width: 95%;
                }
                
                .form-section {
                    margin-bottom: 20px;
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                
                .form-section h3 {
                    margin-bottom: 10px;
                }
                
                label {
                    margin-left: 30px;
                    display: block;
                    margin-bottom: 5px;
                    /* font-weight: bold; */
                }
                
                input,
                select,
                textarea {
                    margin-left: 30px;
                    width: 90%;
                    padding: 8px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                
                textarea {
                    resize: vertical;
                }
                
                .form-footer {
                    text-align: center;
                }
                
                button {
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                span {
                    color: red;
                }
                
                .lines {
                    outline: none;
                    width: max-content;
                    border: none;
                    background-color: #F4F4F4;
                    border-bottom: 2px dotted black;
                    margin-left: 0px;
                    font-weight: bold;
                    overflow: visible;
                }
                
              
                
                /* Image preview container */
                .image-preview-container {
                    width: 150px;
                    height: 150px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    overflow: hidden;
                    display: flex !important;
                    justify-content: center;
                    align-items: center;
                    background-color: #f4f4f4;
                    cursor: pointer;
                    margin-bottom: 10px;
                }
                
                .image-preview-container img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                
                /* Aadhar card */
                .aadhar-img {
                    width: "100px";
                    height: "100px";
                    object-fit: "cover";
                }
                
                /* Annexure-I table */
                .annexure>tr>td {
                    padding: 10px 10px;
                }
                
                .annexure>tr>th {
                    text-align: left;
                }
                
                .annexure>tr>td>input {
                    margin: 0;
                }
                
                
                .product {
                    display: flex;
                    justify-content: space-between;
                    padding: 15px;
                    box-shadow: 0 3px 10px rgb(220, 220, 220);
                    margin: 10px 0;
                }
                
                
                @media print {
                    .page-break {
                        page-break-after: always;
                    }
                
                    .no-break {
                        page-break-inside: avoid;
                    }
                }
                
                /* .center {
                    text-align: center;
                } */
                
                /* Dashboard CSS */
                
                .dashboard {
                    width: 80%;
                    float: inline-end;
                }
                
                .dash {
                    display: flex;
                    flex-wrap: wrap;
                }
                
                .dash-click {
                    margin: 30px;
                }
                
                .toggle {
                    visibility: collapse;
                }
                
                .toggle-btn {
                    visibility: hidden;
                }
                
                .dash-a {
                    text-decoration: none;
                
                }
                
                .dash-a li:hover {
                    color: black;
                    background-color: #a5e8f7;
                }
                
                .dash-board {
                    background-color:#7ed6ea;
                    color: black;
                    list-style-type: none;
                    text-align: center;
                    padding: 1em 1em;
                    margin: 5px 5px;
                    border-radius: 10px;
                }
                
                
                /* common css for dashboard, form, details */
                @media screen and (max-width: 500px) {
                    form {
                        width: 100%;
                    }
                
                    input,
                    textarea,
                    select {
                        width: 80%;
                    }
                
                    /* navigation bar */
                    .sidebar {
                        transform: translateX(-200%);
                    }
                
                    .toggle {
                        visibility: visible;
                    }
                
                    /* Button to toggle the dropdown */
                    .toggle-btn {
                        visibility: visible;
                        margin: 1em;
                        padding: 10px 12px;
                        background-color: #343a40;
                        color: white;
                        border: none;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 16px;
                        position: fixed;
                        top: 0;
                        left: 0;
                    }
                
                    /* Dropdown container */
                    .toggle {
                        margin: 4em 0 0 10px;
                        background-color: #f8f9fa;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        width: 80%;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        position: fixed;
                        z-index: 1000;
                    }
                
                    /* Dropdown wrapper for padding */
                    .toggle-wrapper {
                        padding: 10px;
                        /* margin-top: 20px; */
                        background-color: #343a40;
                    }
                
                    /* List styling inside dropdown */
                    .toggleNav {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        background-color: #686868;
                    }
                
                    .toggleNav li {
                        padding: 5px;
                    }
                
                    .toggleNav a {
                        color: white;
                        text-decoration: none;
                    }
                
                    .toggleNav li:hover {
                        background-color: #343a40;
                    }
                
                    /* Anchor link styling */
                    .toogleNav a {
                        color: #007BFF;
                        text-decoration: none;
                        font-size: 14px;
                    }
                
                    .toogleNav a:hover {
                        text-decoration: underline;
                    }
                
                    /* dashboard */
                    .dashboard {
                        width: 80%;
                        float: inline-end;
                
                
                    }
                
                    .insideform {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10px;
                        width: 100%;
                
                    }
                
                    .dash {
                        display: flex;
                        flex-wrap: wrap;
                    }
                
                    .dash-click {
                        margin: 10px;
                    }
                
                    .stampsign {
                        display: flex;
                        flex-direction: column;
                
                    }
                }
                
                
                /* .dashboard css */
                .button-container {
                    display: flex;
                    margin: 50px;
                    justify-content: space-between;
                    /* gap: 1rem; */
                    /* flex-wrap: wrap; */
                }
                
                .btns {
                
                    width: 40%;
                    height: 150px;
                    padding-top: 70px;
                    font-size: 30px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                
                    text-align: center;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                /* Button colors */
                .blue-btn {
                    background-color: #007bff;
                    color: white;
                }
                
                .green-btn {
                    background-color: #28a745;
                    color: white;
                }
                
                /* Hover effects */
                .btn:hover {
                    opacity: 0.9;
                }
                
                /* Responsive styling */
                @media (max-width: 768px) {
                    .button-container {
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                        flex-wrap: wrap;
                        margin: 1rem 0;
                        /* flex-direction: column; */
                        align-items: center;
                    }
                
                    .btns {
                        padding: 0.8rem 1.2rem;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        width: 100%;
                        margin: 0 5%;
                        text-align: center;
                        width: 90%;
                        text-align: center;
                    }
                
                    /* Button colors */
                    .blue-btn {
                        background-color: #007bff;
                        color: white;
                    }
                
                    .green-btn {
                        background-color: #28a745;
                        color: white;
                    }
                }
                
                
                /* table details */
                
                .user-table {
                
                    border: 1px solid;
                    border-collapse: collapse;
                    width: 100%;
                    padding: 2px;
                
                }
                
                .user-table th {
                    padding: 7px;
                    border: 1px solid grey;
                }
                
                .user-table td {
                    padding: 7px;
                    border: 1px solid;
                    text-align: center;
                }
                 
                /* 
                model aggremennt */
                /* General Styles */
                
                h1,
                h3,
                h4 {
                    /* text-align: center; */
                    color:black;
                }
                
                h4.center,
                h3.center {
                    text-align: center;
                }
                
                /* Agreement Container */
                .agreement-container {
                    /* max-width: 1200px; */
                    margin: 10px;
                    /* padding: 20px; */
                
                
                }
                
                /* Text and Paragraph Styles */
                p {
                    margin: 10px 0;
                    font-size: 1.1em;
                }
                
                /* List Styling */
                ul,
                ol {
                    margin: 20px 0;
                    padding-left: 20px;
                }
                
                ul li,
                ol li {
                    margin-bottom: 10px;
                }
                
                /* Section Styling */
                section {
                    margin-bottom: 20px;
                }
                
                /* Responsive Layout */
                @media only screen and (max-width: 768px) {
                
                    /* Make text slightly smaller for mobile */
                    h1 {
                        font-size: 1.5em;
                    }
                
                    h3,
                    h4 {
                        font-size: 1.2em;
                    }
                
                    p {
                        font-size: 1em;
                    }
                
                    .agreement-container {
                        padding: 15px;
                    }
                
                    /* Center the lists and adjust margins */
                    ul,
                    ol {
                        padding-left: 15px;
                    }
                
                    /* For headers that are centered */
                    .center {
                        text-align: center;
                    }
                }
                
                @media only screen and (max-width: 480px) {
                
                    /* Make text even smaller for very small screens */
                    h1 {
                        font-size: 1.2em;
                    }
                
                    h3,
                    h4 {
                        font-size: 1em;
                    }
                
                    p {
                        font-size: 0.9em;
                    }
                
                    .agreement-container {
                        padding: 10px;
                    }
                
                    /* Make the content more compact */
                    section {
                        margin-bottom: 15px;
                    }
                
                    /* For smaller screens, reduce spacing on lists */
                    ul li,
                    ol li {
                        margin-bottom: 8px;
                    }
                }
                
                /* ----------------------------------------------- */
                
                /* print-format */
                .printformat {
                    font-size: 13px;
                    font-family: Calibri;
                }
                
                
                /* model start  */
                .model {
                    height: 100vh;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.22);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                }
                
                .model>div {
                    background-color: WHITE;
                    padding: 20px;
                
                    margin: 10px;
                    height: 80vh;
                    overflow: auto;
                    width: 1000px;
                }
                
                .model .closeicon {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    font-size: 40px;
                    color: white;
                }
                
                /* model end  */
                
                
                
                /* wcr model css   */
                .a4-page {
                    width: 794px;
                
                    /* background-color: red !important; */
                    /* A4 width in pixels */
                    /* height: 1123px; */
                    /* A4 height in pixels */
                    margin: 0 auto;
                    padding: 0 50px;
                    /* Adjust as needed for inner spacing */
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                    background-color: #fff;
                    page-break-before: always;
                }
                
                .a4-page h3,
                .a4-page h4 {
                    text-align: center;
                
                }
                
                .a4-page h4.left {
                    margin: 10px;
                    text-align: left;
                    color: black;
                }
                
                .a4-page p {
                    text-align: justify;
                    font-size: 13px
                }
                
                .page-a4-proforma {
                    font-size: 13px;
                }
                
                .page-a4-proforma p {
                    justify-content: center;
                
                }
                
                
                .a4-page table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                
                .a4-page th,
                .a4-page td {
                    padding: 8px;
                    text-align: left;
                    font-size: 13px;
                    border: 1px solid #ddd;
                }
                
                .a4-page th {
                    background-color: #f2f2f2;
                }
                
                .a4-page .signature-section {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
                
                .a4-page .signature-section img {
                    width: 200px;
                    height: 150px;
                }
                
                .a4-page .inline-container {
                    display: flex;
                    gap: 10px;
                }
                
                .a4-page .inline-container label {
                    font-weight: bold;
                }
                
                .a4-page th,
                .a4-page .th {
                    text-align: center;
                }
                
                .a4-page .para {
                    text-align: justify;
                    font-size: 13px;
                }
                
                .a4-page .paraWrapper {
                    margin-top: 20px;
                }
                
                
                
                /* annexure1  */
                .a4-page-annexure1 {
                    width: 794px;
                    /* A4 width in mm */
                    /* height: 1123px; */
                    /* A4 height in mm */
                    /* background-color: red !important; */
                    margin: 0 auto;
                    padding: 20px;
                    box-sizing: border-box;
                    background-color: #fff;
                    font-family: Arial, sans-serif;
                }
                
                .a4-page-annexure1 .header {
                    text-align: center;
                    color: grey;
                    margin-bottom: 30px;
                }
                
                .a4-page-annexure1 h2 {
                    font-size: 18px;
                }
                
                .a4-page-annexure1 h3,
                .a4-page-annexure1 h5 {
                    font-size: 14px;
                }
                
                .a4-page-annexure1 table.annexure {
                    width: 100%;
                    margin-top: 20px;
                    border: none;
                
                    border-collapse: collapse;
                    font-size: 13px;
                }
                
                .a4-page-annexure1 tr {
                    border: none;
                
                }
                
                .a4-page-annexure1 table.annexure th,
                .a4-page-annexure1 table.annexure td {
                    padding: 8px;
                    text-align: left;
                    border: none;
                }
                
                .a4-page-annexure1 table.annexure th {
                    /* background-color: #f2f2f2; */
                    font-weight: bold;
                }
                
                
                
                
                .a4-page-annexure1 .page-a4-proforma {
                    /* margin-top: 30px; */
                    padding: 20px;
                    border-top: 1px solid #ddd;
                }
                
                .a4-page-annexure1 .page-a4-proforma h3 {
                    font-size: 13px;
                    color: black;
                    text-align: center;
                    /* margin: 10px 0; */
                }
                
                .a4-page-annexure1 .page-a4-proforma p {
                    font-size: 13px;
                    line-height: 1.6;
                    text-align: justify;
                }
                
                .a4-page-annexure1 .signature-section {
                    display: flex;
                    justify-content: space-between;
                    /* margin-top: 40px; */
                }
                
                .a4-page-annexure1 .signature-section div {
                    width: 45%;
                    text-align: center;
                }
                
                .a4-page-annexure1 .signature-section img {
                    width: 200px;
                    height: 150px;
                }
                
                .a4-page-annexure1 .signature-section label {
                    display: block;
                    margin-top: 10px;
                    font-weight: bold;
                    font-size: 12px;
                }
                
                .a4-page-annexure1 h4 {
                    font-size: 12px;
                    line-height: 1.5;
                    margin-top: 30px;
                    text-align: left;
                }
                
                .a4-page-annexure1 b {
                    font-weight: bold;
                }
                
                /* annexure1  */
                
                
                /* self declar */
                
                
                .a4-page-selfdeclar{
                    width: 794px;
                    font-size: 13px;
                    margin: auto;
                }
                .a4-page-selfdeclar h3{
                    text-align: left;
                }
                
                
                
                
                /* self declar */
                
                
                /* connectionagreement */
                .a4-page-connectionagreement{
                    font-size: 13px;
                    width: 794px;
                    margin: auto;
                }
                
                
                
                
                
                /* connectionagreement */
                
                .a4-page-agreement-container{
                    font-size: 13px;
                    width: 794px;
                    margin: auto;
                 
                }
                
                .a4-page-selfdeclar .text-left{
                    text-align: left;
                    font-weight: 400;
                }
                .a4-page-selfdeclar table{
                    margin-left: 30px;
                }
                
                .a4-page-selfdeclar .signatureContent{
                
                    width: fit-content;
                    margin-left: auto;
                }
                .a4-page-selfdeclar .inline-container{
                    margin-bottom: 0;
                }
                .a4-page-selfdeclar .inline-container label{
                    margin-left: 0;
                }
                
               .agreement-container .inline-container1 p{
                align-items:left;
               }
                }
               </style>`)
                break;



           

        }


    }
        , [])
    let closeModel = () => {
        setCurrenttViewPage(null)
    }


    const generatePdf = () => {
        const content = document.querySelector(".modelBody"); // Capture the specific section
      
        // Configure the options for html2pdf
        const options = {
            margin: 0,
            filename: `${user.wcr.name}-${heading}.pdf`,
            image: { type: 'jpeg', quality: 0.1  },
            html2canvas: {
                scale: 1.3, // Quality of the image capture (higher scale = better quality)
                letterRendering: true,
                useCORS: true, // Allow CORS for images and content
                
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                autoPaging: true, // Automatically break pages if the content overflows
            }
        };

        // Generate the PDF
        html2pdf().from(content).set(options).save();
    };

    const printContent = () => {
        const content = document.querySelector(".modelBody");
        const printWindow = window.open("", "_blank", "");



        // Create the HTML content for the print window, including the styles and content
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Document</title>
                    
                    ${css}
                </head>
                <body>
                    <div  class="a4-page-content">
                        ${content.innerHTML}
                    </div>
                </body>
            </html>
        `);

        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };



    return (
        <div className='model'>
            <IoCloseCircleOutline onClick={closeModel} className='closeicon' />
            <div>
                <div className='modelHead'>

                </div>
                <div className='modelBody'>
                    {component}
                </div>
                <div class="modal-footer" style={{ margin: "50px", alignItems: "center", textAlign: "center" }}>
                    <button id="downloadform" style={{ backgroundColor: "#0295B6", color: "white" }} onClick={() => generatePdf(user)} class="btn btn-info">DOWNLOAD FORM</button>
                    <button id="printform" class="btn btn-info" style={{ backgroundColor: "#0295B6", color: "white", margin: "10px" }} onClick={printContent}>PRINT FORM</button>
                </div>

            </div>


        </div>
    )
}

export default Model
