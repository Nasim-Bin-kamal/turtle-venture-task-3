import React from 'react';
import './CurrentStation.scss';
import BtnBackArrow from '../../assets/images/back-arrow.png';
import BtnSwitch from '../../assets/images/switch.png';
import BtnPlus from '../../assets/images/plus.png';
import BtnMinus from '../../assets/images/minus.png';
import stationLogo from '../../assets/images/stationLogo.png';

const CurrentStation = ({ stations, runningStation }) => {
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
                <div className="radioBody2">

                    {
                        stations?.map((station) => (
                            <div key={station?.id}>
                                {
                                    station === runningStation && (
                                        <div className='runningStation'>
                                            <button>
                                                <img src={BtnPlus} alt="" />
                                            </button>
                                            <div>
                                                <img className='stationLogo' src={stationLogo} alt="" />
                                            </div>
                                            <button>
                                                <img src={BtnMinus} alt="" />
                                            </button>

                                        </div>
                                    )
                                }

                                <div className="singleStation2" >
                                    <p>{station?.stationName}</p>
                                    <p>{station?.frequency}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className='radioFooter'>
                    <p className='footerTitle'>CURRENTLY PLAYING</p>
                    <p className='currentPlaying'>{runningStation?.stationName}</p>

                </div>
            </div>
        </div>
    );
};

export default CurrentStation;