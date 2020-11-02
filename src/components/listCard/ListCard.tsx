import React from 'react';
import { CovidObject } from '../../types/covid';
import { formatDate, formatNumber } from '../../helpers/format';
import './ListCard.scss';

export default function ListCard(props: { data: Array<CovidObject> }) {
    const { data } = props;

    return(
        <div className="row p-4 table-list rounded shadow">
            <div className="col">
                <div className="row pb-4">
                    <div className="col">
                        <span className="subheading">Date</span>
                    </div>
                    <div className="col">
                        <span className="subheading">Total Cases</span>
                    </div>
                    <div className="col">
                        <span className="subheading">Total Deaths</span>
                    </div>
                    <div className="col">
                        <span className="subheading">New Cases</span>
                    </div>
                    <div className="col">
                        <span className="subheading">New Deaths</span>
                    </div>
                </div>
                {
                    data.map(d => {
                        return(
                            <div className="row cases rounded py-3">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <span>{formatDate(d.date)}</span>
                                        </div>
                                        <div className="col">
                                            <span>{formatNumber(d.total_confirmed)}</span>
                                        </div>
                                        <div className="col">
                                            <span>{formatNumber(d.total_deceased)}</span>
                                        </div>
                                        <div className="col">
                                            <span>{formatNumber(d.new_confirmed)}</span>
                                        </div>
                                        <div className="col">
                                            <span>{formatNumber(d.new_deceased)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}