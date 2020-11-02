import React, { useEffect, useState } from 'react';
import TextCard from '../../components/textCard/TextCard';
import ListCard from '../../components/listCard/ListCard';
import { fetchData } from '../../middleware/api';
import { CovidObject } from '../../types/covid';
import { formatDate, formatNumber } from '../../helpers/format';
import './Dashboard.scss';
import { LineChart } from '../../components/lineChart/LineChart';

export default function Dashboard() {
    const [data, setData] = useState<Array<CovidObject>>([]);
    const labelArray1: Array<string> = ['Total Cases to Date', 'Total Deaths to Date'];
    const labelArray2: Array<string> = ['New Cases per Day', 'New Deaths per Day'];

    useEffect(() => {
        fetchData('US').then((res) => {
            setData(res);
        })
    })

    useEffect(() => {}, [data]);

    return(
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="col">
                        <span className="title">COVID-19 Statistics (US only)</span>
                        <div className="w-100"></div>
                        <span>The idea for this COVID-19 statistics tracker is to provide a cleaner and simpler take on some of the important data on COVID-19. This site is an update from my previous COVID-19 Tracker. This dashboard is made using Chart.js to visualize the data and the dataset is provided by Google.</span>
                        <div className="w-100"></div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <span>Last updated on:&nbsp;</span>
                        {
                            data.length > 0 ? <span>{formatDate(data[data.length - 1].date)}</span> : <span>N/A</span>
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
                <div className="row pt-4">
                    <div className="col pt-4">
                        <span className="heading">Total Cases and Deaths to Date</span>
                        {
                            typeof(data) !== undefined ? <LineChart data={data} labels={labelArray1}/> : null
                        }
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <span className="heading">New Cases and Deaths to Date</span>
                        {
                            typeof(data) !== undefined ? <LineChart data={data} labels={labelArray2}/> : null
                        }
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col align-self-center">
                        <ListCard data={data} />
                    </div>
                </div>
            </div>
            <footer className="d-flex justify-content-between bg-dark w-100 text-white footer">
                <span>Powered by React, Chart.js and Bootstrap.</span>
                <span>Contact: nicholassteven998@gmail.com</span>
            </footer>
        </div>
    )
}