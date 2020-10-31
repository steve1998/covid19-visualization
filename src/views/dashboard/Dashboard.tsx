import React, { useEffect, useState } from 'react';
import { fetchData } from '../../middleware/api';
import './Dashboard.scss';

export default function Dashboard() {
    const [data, setData] = useState<Array<any>>([]);

    useEffect(() => {
        fetchData('US').then((res) => {
            setData(res);
        })
    })

    useEffect(() => {}, [setData]);

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <span className="title">COVID-19 Statistics (US)</span>
                    <div className="w-100"></div>
                    <span>The idea for this COVID-19 statistics tracker is to provide a cleaner and simpler take on some of the important data on COVID-19. This dashboard is made using D3.js to visualize the data and the dataset is provided by Google.</span>
                    <div className="w-100"></div>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col">
                    <span>Made by Nicholas Steven Darmawan</span>
                </div>
            </div>
        </div>
    )
}