import React, { useEffect, useState } from 'react';
import TextCard from '../../components/text-card/TextCard';
import { fetchData } from '../../middleware/api';
import { CovidObject } from '../../types/covid';
import { formatNumber } from '../../helpers/format';
import './Dashboard.scss';

export default function Dashboard() {
    const [data, setData] = useState<Array<CovidObject>>([]);

    useEffect(() => {
        fetchData('US').then((res) => {
            setData(res);
        })
    })

    useEffect(() => {}, [data]);

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <span className="title">COVID-19 Statistics (US)</span>
                    <div className="w-100"></div>
                    <span>The idea for this COVID-19 statistics tracker is to provide a cleaner and simpler take on some of the important data on COVID-19. This site is an update from my previus COVID-19 Tracker. This dashboard is made using D3.js to visualize the data and the dataset is provided by Google.</span>
                    <div className="w-100"></div>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col">
                    <span>Last updated on:&nbsp;</span>
                    {
                        data.length > 0 ? <span>{data[data.length - 1].date}</span> : <span>N/A</span>
                    }
                </div>
            </div>
            <div className="row pt-4">
                <div className="col">
                    <span>Made by Nicholas Steven Darmawan</span>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col">
                    {
                        data.length > 0 ? (
                            <TextCard title={"Total Cases"} data={formatNumber(data[data.length - 1].total_confirmed)}/>
                        ) : null
                    }
                </div>
                <div className="col">
                    {
                        data.length > 0 ? (
                            <TextCard title={"Total Deaths"} data={formatNumber(data[data.length - 1].total_deceased)}/>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}