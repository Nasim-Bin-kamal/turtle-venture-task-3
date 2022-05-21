import React from 'react';
import './AllStations.scss';
import BtnBackArrow from '../../assets/images/back-arrow.png';
import BtnSwitch from '../../assets/images/switch.png';



const AllStations = ({ stations, handlePlay }) => {

    return (
        <div>
            <div className='radioCard'>
                <div className="radioHeader">

                    <button className='backBtn'>
                        <img src={BtnBackArrow} alt="back-arrow" />
                    </button>
                    <h2 className='title'>STATIONS</h2>

                    <button className='switchBtn'>
                        <img src={BtnSwitch} alt="switch" />
                    </button>
                </div>
                <div className="radioBody">
                    {
                        stations?.map((station) => (
                            <div onClick={() => handlePlay(station?.id)} className="singleStation" key={station?.id}>
                                <p>{station?.name}</p>
                                <p>{station?.frequency}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div >
    );
};

export default AllStations;