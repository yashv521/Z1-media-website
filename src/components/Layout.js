import React from 'react';
import CashWindow from './CashWindow';
import GraphBar from './GraphBar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import './layout.css'; 
import CircularGraph from './CircularGraph';

const Layout = () => {
    return (  
        <div>
            <div className="header">
                <Navbar />
            </div>
            <div className="panels">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="container">
                    <div className="cash">
                        <CashWindow />
                    </div>
                    <div className="graph">
                        <GraphBar />
                    </div>
                    <div className="c-graph">
                        <CircularGraph />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;