import React from 'react';
import { CovidObject } from '../../types/covid';

export default function ListCard(props: { data: Array<CovidObject> }) {
    const { data } = props;

    return(
        <div className="row p-4 rounded shadow">
            <div className="col">
                <div className="row pb-4">
                    <div className="col">
                        <span>Date</span>
                    </div>
                    <div className="col">
                        <span>Total Cases</span>
                    </div>
                    <div className="col">
                        <span>Total Deaths</span>
                    </div>
                    <div className="col">
                        <span>New Cases</span>
                    </div>
                    <div className="col">
                        <span>New Deaths</span>
                    </div>
                </div>
                {
                    data.map(d => {
                        return(
                            <div className="row cases py-2">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <span>{d.date}</span>
                                        </div>
                                        <div className="col">
                                            <span>{d.total_confirmed}</span>
                                        </div>
                                        <div className="col">
                                            <span>{d.total_deceased}</span>
                                        </div>
                                        <div className="col">
                                            <span>{d.new_confirmed}</span>
                                        </div>
                                        <div className="col">
                                            <span>{d.new_deceased}</span>
                                        </div>
                                    </div>
                                    <div className="horizontal"></div>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}