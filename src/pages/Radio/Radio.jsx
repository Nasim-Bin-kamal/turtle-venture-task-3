import React, { useEffect, useState } from 'react';
import './Radio.scss';
import AllStations from '../../components/AllStations/AllStations';
import CurrentStation from '../../components/CurrentStation/CurrentStation';
import SignIn from '../../components/SignIn/SignIn';


const Radio = () => {
    const [runningStation, setRunningStation] = useState([]);
    const [stations, setSations] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-castle-17740.herokuapp.com/stations')
            .then(res => res.json())
            .then(data => setSations(data))
    }, [])


    const handlePlay = (id) => {
        const foundStation = stations.find(station => station.id === id);
        setRunningStation(foundStation);
    }
    return (


        <div className='section'>
            <div>
                <SignIn />
            </div>


            <div className='radio'>
                <div>
                    <AllStations stations={stations} handlePlay={handlePlay} />
                </div>
                <div>
                    <CurrentStation stations={stations} runningStation={runningStation} />
                </div>
            </div>

        </div>


    );
};

export default Radio;