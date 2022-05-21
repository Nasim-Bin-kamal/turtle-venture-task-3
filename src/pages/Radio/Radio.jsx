import React, { useState } from 'react';
import './Radio.scss';
import AllStations from '../../components/AllStations/AllStations';
import CurrentStation from '../../components/CurrentStation/CurrentStation';

const stations = [
    {
        id: 0,
        name: "Putin FM",
        frequency: "66,6"
    },
    {
        id: 1,
        name: "Dribbble FM",
        frequency: "101,2"
    },
    {
        name: "Doge FM",
        frequency: "99,4"
    },
    {
        id: 2,
        name: "Ballads FM",
        frequency: "87,1"
    },
    {
        id: 3,
        name: "Maximum FM",
        frequency: "142,2"
    },
];

const Radio = () => {
    const [runningStation, setRunningStation] = useState([]);
    const handlePlay = (id) => {
        const foundStation = stations.find(channel => channel.id === id);
        setRunningStation(foundStation);
    }
    return (
        <div className='radio'>
            <div>
                <AllStations stations={stations} handlePlay={handlePlay} />
            </div>
            <div>
                <CurrentStation stations={stations} runningStation={runningStation} />
            </div>
        </div>
    );
};

export default Radio;