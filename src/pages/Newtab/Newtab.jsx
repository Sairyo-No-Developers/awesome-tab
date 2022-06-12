import axios from 'axios';
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

    useEffect(async () => {
        try {
            let res = await axios.get('http://localhost:5000');
            console.log(res.data);
            console.log(window.localStorage.getItem('test'));
            window.localStorage.setItem('test', 'test');
        } catch (error) {
            console.error(error);
        }
        let i = setInterval(async () => {
            setTime(() => getTime());
        }, 250);

        return () => {
            try {
                clearInterval(i);
            } catch (error) {}
        };
    }, []);
    return (
        <div className="App">
            <h1>{time}</h1>
            <div className="foreground"></div>
        </div>
    );
};

export default Newtab;
