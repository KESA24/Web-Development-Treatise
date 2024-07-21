import React, {useState, useEffect} from 'react';
import './DateTime.css'

export const DateTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() =>{
        var timer = setInterval(() =>setDate(new Date()),1000)

        return function cleanup(){
            clearInterval(timer)

        }
    });
    return (
        <div className="DateTime">
            <h1>Current Date and Time</h1>
            <hr />
            <h2>Hello there; </h2>
            <p>Today(MM/DD/YY) is the :{' ' + date.toLocaleDateString()}</p>
            <p>And the time is:{'   ' + date.toLocaleTimeString()}</p>
            
            <h3>You're welcome.</h3>
        </div>
    )
}



export default DateTime

