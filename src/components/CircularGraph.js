import React from 'react';
import './circulargraph.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularGraph = () => {
    const percentage = 67;
    return (  
        <div className="c-graph-container">
            <div className='income-b' style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`}/>
            </div>
            <div className='expense-b' style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`}/>
            </div>
        </div>
    );
}
 
export default CircularGraph;