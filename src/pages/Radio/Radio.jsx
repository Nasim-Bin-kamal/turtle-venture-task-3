import React from 'react';
import './Radio.scss';
import AllStations from '../../components/AllStations/AllStations';
import CurrentStation from '../../components/CurrentStation/CurrentStation';

const Radio = () => {
    return (
        <div className='radio'>
            <div>
                <AllStations />
            </div>
            <div>
                <CurrentStation />
            </div>
        </div>
    );
};

export default Radio;