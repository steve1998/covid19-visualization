import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CovidStatesObject } from '../../types/covid';

export function BarChart(props: { data: Array<CovidStatesObject> }) {
    const { data } = props;

    const datasetConfirmed: Array<number> = data.map(d => {
        return d.total_confirmed;
    });

    const datasetDeceased: Array<number> = data.map(d => {
        return d.total_deceased;
    });

    const states: Array<string> = data.map(d => {
        return d.state;
    })

    const options = {
        animation: {
        },
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
   
    const datasetObject = {
        labels: states,
        datasets: [
            {
                label: 'Latest Confirmed Cases',
                data: datasetConfirmed,
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: "rgba(57, 137, 207, .8)",
                borderColor: "rgba(57, 137, 207, 1)",
                hoverBackgroundColor: "rgba(57, 137, 207, 1)"
            }, 
            {
                label: 'Latest Confirmed Deceased',
                data: datasetDeceased,
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: "rgba(202, 62, 67, 0.8)",
                borderColor: "rgba(202, 62, 67, 1)",
                hoverBackgroundColor: "rgba(202, 62, 67, 1)"
            }
        ]
    }

    return(
        <Bar data={datasetObject} width={800} height={400} options={options} />
    )
}