import React from 'react';
import { Line } from 'react-chartjs-2';
import { CovidObject } from '../../types/covid';

export function LineChart(props: { data: Array<CovidObject>, labels: Array<string> }) {
    const { data, labels } = props;

    let datasetConfirmed: Array<number> = [];
    let datasetDeceased: Array<number> = [];

    const date: Array<number> = data.map(d => {
        return d.date;
    })

    const options = {
        animation: {
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                }
            }]
        }
    }

    switch(labels[0]) {
        case 'Total Cases to Date':
            datasetConfirmed = data.map(d => {
                return d.total_confirmed;
            })
        
            datasetDeceased = data.map(d => {
                return d.total_deceased;
            })
            break;
        case 'New Cases per Day':
            datasetConfirmed = data.map(d => {
                return d.new_confirmed;
            })
        
            datasetDeceased = data.map(d => {
                return d.new_deceased;
            })
            break;
        default:
            break;
    }

   
    const datasetObject = {
        labels: date,
        datasets: [
            {
                label: labels[0],
                data: datasetConfirmed,
                lineTension: 0.1,
                backgroundColor: "rgba(57, 137, 207, 0.4)",
                borderColor: "rgba(57, 137, 207, 1)",
                pointBorderColor: "white",
            }, 
            {
                label: labels[1],
                data: datasetDeceased,
                backgroundColor: "rgba(202, 62, 67, 0.4)",
                borderColor: "red",
                pointBorderColor: "white"
            }
        ]
    }

    return(
        <Line data={datasetObject} width={800} height={400} options={options} />
    )
}