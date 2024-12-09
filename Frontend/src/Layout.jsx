import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(isDropdownVisible ? false : true);
    };
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <a href="/" className='dash-a'><li className='dash-board'><b>Dashboard</b></li></a>
                    <ul className="nav">
                        <a href="/wcr"><li>Wcr</li></a>
                        <a href="/Annexure1"><li>Annexure-1</li></a>
                        <a href="/ProfomaA"><li>Profoma A</li></a>
                        <a href="/SelfDecleration"><li>Self Declaration</li></a>
                        <a href="/ConnectionAggrement"><li>Connection Agreement</li></a>
                        <a href="/ModelAggrement"><li>Model Agreement</li></a>
                        <a href="/allusers"><li>User Details</li></a>
                    </ul>
                </div>
            </div>
            <a className="toggle-btn" onClick={toggleDropdown}>
                {isDropdownVisible ? <i class="fa-solid fa-bars fa-1x toogleicon" ></i> : <i class="fa-solid fa-bars fa-1x toogleicon" ></i>}
            </a>
            {isDropdownVisible && (
                <div className="toggle">
                    <div className="toggle-wrapper">
                        <ul className="toggleNav">
                            <a href="/wcr"><li>Wcr</li></a>
                            <a href="/Annexure1"><li>Annexure-1</li></a>
                            <a href="/ProfomaA"><li>Profoma A</li></a>
                            <a href="/SelfDecleration"><li>Self Declaration</li></a>
                            <a href="/ConnectionAggrement"><li>Connection Agreement</li></a>
                            <a href="/ModelAggrement"><li>Model Agreement</li></a>
                        </ul>
                    </div>
                </div>
            )}
            <Outlet />
        </>
    );
};

export default Layout;
