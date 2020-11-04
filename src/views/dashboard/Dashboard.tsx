import React, { useEffect, useState } from 'react';
import TextCard from '../../components/textCard/TextCard';
import ListCard from '../../components/listCard/ListCard';
import { fetchDataCountry, fetchDataStates } from '../../middleware/api';
import { CovidObject, CovidStatesObject } from '../../types/covid';
import { formatDate, formatNumber } from '../../helpers/format';
import { LineChart } from '../../components/lineChart/LineChart';
import { Collapse, Row, Col, Container } from 'reactstrap';
import './Dashboard.scss';
import { BarChart } from '../../components/barChart/BarChart';

export default function Dashboard() {
    const [data, setData] = useState<Array<CovidObject>>([]);
    const [statesData, setStatesData] = useState <Array<CovidStatesObject>>([]);
    const [isOpenTotal, setIsOpenTotal] = useState<boolean>(true);
    const [isOpenNew, setIsOpenNew] = useState<boolean>(true);
    const [isOpenState, setIsOpenState] = useState<boolean>(true);
    const labelArray1: Array<string> = ['Total Cases to Date', 'Total Deaths to Date'];
    const labelArray2: Array<string> = ['New Cases per Day', 'New Deaths per Day'];

    useEffect(() => {
        fetchDataCountry().then((res) => {
            setData(res);
        })

        fetchDataStates().then((res) => {
            setStatesData(res);
        })
    })

    useEffect(() => {}, [data]);

    const toggleTotal = () => {
        setIsOpenTotal(!isOpenTotal);
    }

    const toggleNew = () => {
        setIsOpenNew(!isOpenNew);
    }

    const toggleState = () => {
        setIsOpenState(!isOpenState);
    }

    return(
        <div className="d-flex flex-column min-vh-100">
            <Container className="p-4 flex-grow-1">
                <Row>
                    <Col>
                        <span className="title">COVID-19 Notebook (US only)</span>
                        <div className="w-100"></div>
                        <span>The idea for this COVID-19 notebook is to provide a cleaner and simpler take on some of the important data on COVID-19. This site is an update from my previous COVID-19 Tracker. This notebook is made possible using the dataset is provided by Google. The dataset is also not the most recently updated one since some of the data is incomplete and so the notebook only displays complete data.</span>
                        <div className="w-100"></div>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <span>Last updated on:&nbsp;</span>
                        {
                            data.length > 0 ? <span>{formatDate(data[data.length - 1].date)}</span> : <span>N/A</span>
                        }
                    </Col>
                </Row>
                <div className="row pt-4">
                    <div className="col">
                        <span>Made by Nicholas Steven Darmawan</span>
                    </div>
                </div>
                <Row className="pt-4">
                    <Col>
                        {
                            data.length > 0 ? (
                                <TextCard title={"Total Cases"} data={formatNumber(data[data.length - 1].total_confirmed)}/>
                            ) : null
                        }
                    </Col>
                    <Col>
                        {
                            data.length > 0 ? (
                                <TextCard title={"Total Deaths"} data={formatNumber(data[data.length - 1].total_deceased)}/>
                            ) : null
                        }
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <div className="heading-section" onClick={toggleTotal}>
                            <span className="heading">Total Cases and Deaths to Date</span>
                        </div>
                        <Collapse isOpen={isOpenTotal}>
                            {
                                typeof(data) !== undefined ? <LineChart data={data} labels={labelArray1}/> : null
                            }
                        </Collapse>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <div className="heading-section" onClick={toggleNew}>
                            <span className="heading">New Cases and Deaths to Date</span>
                        </div>
                        <Collapse isOpen={isOpenNew}>
                            {
                                typeof(data) !== undefined ? <LineChart data={data} labels={labelArray2}/> : null
                            }
                        </Collapse>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <div className="heading-section" onClick={toggleState}>
                            <span className="heading">Total Cases and Deaths per State</span>
                        </div>
                        <Collapse isOpen={isOpenState}>
                            {
                                typeof(statesData) !== undefined ? <BarChart data={statesData}/> : null
                            }
                        </Collapse>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col className="align-self-center">
                        <ListCard data={data} />
                    </Col>
                </Row>
            </Container>
            <footer className="d-flex justify-content-between bg-dark w-100 text-white sticky-bottom footer">
                <span>Powered by React, Chart.js and Bootstrap.</span>
                <span>Contact: nicholassteven998@gmail.com</span>
            </footer>
        </div>
    )
}