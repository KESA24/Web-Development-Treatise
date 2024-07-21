import React, {useState, useEffect} from 'react';

export const DateTime = (input) => {
    var [date, setDate] = useState(new Date());

    useEffect(() =>{
        var timer = setInterval(() =>setDate(new Date()),1000)

        return function cleanup(){
            clearInterval(timer)

        }
    });
    return (
        <div className="DateTime">
            <h4 >Hello there; </h4>
            <p>Today(MM/DD/YY) is the :{' ' + date.toLocaleDateString()}</p>
            <p>And the time is:{'   ' + date.toLocaleTimeString()}</p>
            
        </div>
    )
}



export default DateTime

