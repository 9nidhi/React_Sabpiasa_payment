import React from 'react';

import { useLocation } from "react-router-dom";

const Result = (props) => {
    const location = useLocation();

    const resutfromResponse = location?.state?.data;

    const pairs = resutfromResponse.split("&")

    const keyValuePairs = pairs.map((pair, index) => {
        const [key, value] = pair.split("=")
        const decodedValue = decodeURIComponent(value)
        return { id: index + 1, key, value: decodedValue }
    })

    return (
        <>
            {/* Response is {resutfromResponse}
            <hr /> */}

            <table class="table table-hover">
                <thead>
                    <tr className='bg-success text-white'>
                        <th scope="col">Sl No.</th>
                        <th scope="col">Key</th>
                        <th scope="col">Response Values</th>
                    </tr>
                </thead>
                {keyValuePairs.map(pair => (
                    <tbody key={pair.id} className='bg-warning text-white'>
                        <tr>
                            <th scope="row">{pair.id}</th>
                            <td>{pair.key}</td>
                            <td>{pair.value}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>

    )
}
export default Result;