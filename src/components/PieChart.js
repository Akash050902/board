import React from "react";
import { 
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend 
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend 
);

const Piechart = () => {
    const data = {
        labels:['Basic Trees','Custom Short Pants','Super Hoodies'],
        datasets:[{
            data: [55,31,14],
            backgroundColor:['#98D89E','#F6DC7D', '#EE8484']
        }]
    }
    const options = {

    }
    return(
        <div className="Main">
            <div style={{padding :'1',
                        width:'300px', height: '300px'}}>
                <Pie data= {data} options={options}></Pie>
            </div>
        </div>
    )
}
export default Piechart;