import React, { useEffect, useState } from 'react';
import TextCard from '../../components/textCard/TextCard';
import ListCard from '../../components/listCard/ListCard';
import { fetchData } from '../../middleware/api';
import { CovidObject } from '../../types/covid';
import { formatDate, formatNumber } from '../../helpers/format';
import { LineChart } from '../../components/lineChart/LineChart';
import { Collapse, Row, Col, Container } from 'reactstrap';
import './Dashboard.scss';

export default function Dashboard() {
    const [data, setData] = useState<Array<CovidObject>>([]);
    const [isOpenTotal, setIsOpenTotal] = useState<boolean>(true);
    const [isOpenNew, setIsOpenNew] = useState<boolean>(true);
    const labelArray1: Array<string> = ['Total Cases to Date', 'Total Deaths to Date'];
    const labelArray2: Array<string> = ['New Cases per Day', 'New Deaths per Day'];

    useEffect(() => {
        fetchData('US').then((res) => {
            setData(res);
        })
    })

    useEffect(() => {}, [data]);

    const toggleTotal = () => {
        setIsOpenTotal(!isOpenTotal);
    }

    const toggleNew = () => {
        setIsOpenNew(!isOpenNew);
    }

    return(
        <div className="d-flex flex-column min-vh-100">
            <Container className="p-4 flex-grow-1">
                <Row>
                    <Col>
                        <span className="title">COVID-19 Notebook (US only)</span>
                        <div className="w-100"></div>
                        <span>The idea for this COVID-19 notebook is to provide a cleaner and simpler take on some of the important data on COVID-19. This site is an update from my previous COVID-19 Tracker. This dashboard is made using the dataset is provided by Google.</span>
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
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-link-45deg mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
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
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-link-45deg mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
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