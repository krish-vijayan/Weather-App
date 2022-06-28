import React, {useState, useEffect} from 'react';

function KeralaApi(locOrCurr) {
    const [ location, setLocation ] = useState([]);
    const [ current, setCurrent ] = useState([]);
    const [ condition, setCondition] = useState([]);

    useEffect(() => {
        fetch ('http://api.weatherapi.com/v1/current.json?key=a32de11a20304d02950145028222806%20&q=Kochi&aqi=no')
        .then((res) => res.json())
        .then((data) => {
            setLocation(data.location);
            setCurrent(data.current);
            setCondition(data.current.condition);
            console.log("API WAS CALLED");
        });
    },[]);

    if (locOrCurr == "location") {return location}
    else if (locOrCurr == "current") {return current}
    else {return condition}

    
}

export default KeralaApi;