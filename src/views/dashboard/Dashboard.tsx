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
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Made by Nicholas Steven Darmawan</span>
                </div>
            </div>
        </div>
    )
}