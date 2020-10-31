import React, { useEffect, useState } from 'react';
import { fetchData } from '../../middleware/api';

export default function Dashboard() {
    const [data, setData] = useState<Array<any>>([]);

    useEffect(() => {
        fetchData('US').then((res) => {
            setData(res);
        })
    })

    useEffect(() => {}, [setData]);

    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}