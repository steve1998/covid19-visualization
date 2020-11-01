import React from 'react';

export default function TextCard(props: { title: string, data: any }) {
    return(
        <div className="textCard p-4 rounded shadow">
            <div className="row">
                <div className="col">
                    <span>{props.title}</span>            
                    <span>:&nbsp;</span>
                    {
                        props.data !== null ? <span>{props.data}</span> : <span>N/A</span>
                    }
                </div>
            </div>
        </div>
    )
}