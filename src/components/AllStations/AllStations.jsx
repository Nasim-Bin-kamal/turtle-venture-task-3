import React from 'react';
import './AllStations.scss';
import BtnBackArrow from '../../assets/images/back-arrow.png';
import BtnSwitch from '../../assets/images/switch.png';

const channels = [
    {
        name: "Putin FM",
        frequency: "66,6"
    },
    {
        name: "Dribbble FM",
        frequency: "101,2"
    },
    {
        name: "Doge FM",
        frequency: "99,4"
    },
    {
        name: "Ballads FM",
        frequency: "87,1"
    },
    {
        name: "Maximum FM",
        frequency: "142,2"
    },
];

const AllStations = () => {
    return (
        <div>
            <div className='radioCard'>
                <div className="stationHeader">

                    <button className='backBtn'>
                        <img src={BtnBackArrow} alt="back-arrow" />
                    </button>
                    <h2 className='title'>STATIONS</h2>

                    <button className='switchBtn'>
                        <img src={BtnSwitch} alt="switch" />
                    </button>
                </div>
                <div className="stations">
                    {
                        channels?.map((channel, c_id) => (
                            <div className="singleStation" key={c_id}>
                                <p>{channel?.name}</p>
                                <p>{channel?.frequency}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div >
    );
};

export default AllStations;