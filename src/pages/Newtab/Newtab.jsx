import React, { useEffect } from 'react';
import './Newtab.scss';

const getTime = () => {
    let d = new Date();
    let hr = d.getHours(); // => 9
    let min = d.getMinutes(); // =>  30
    let sec = d.getSeconds(); // => 51
    return `${hr < 10 ? '0' : ''}${hr}:${min < 10 ? '0' : ''}${min}`;
};

const Newtab = () => {
    const [time, setTime] = React.useState(() => getTime());

    useEffect(() => {
        let i = setInterval(() => {
            setTime(() => getTime());
        }, 250);
    }, []);
    return (
        <div className="App">
            <h1>{time}</h1>
            <div className="foreground"></div>
        </div>
    );
};

export default Newtab;
