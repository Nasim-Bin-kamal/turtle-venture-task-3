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
                <div className="radioBody">
                    {/* <div className="singleStation">
                        <p>Putin FM</p>
                        <p>66,6</p>
                    </div>
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
                    <div className="singleStation">
                        <p>Dribbble FM</p>
                        <p>101,2</p>
                    </div>
                    <div className="singleStation">
                        <p>Doge FM</p>
                        <p>99,4</p>
                    </div> */}
                    {
                        stations?.map((station) => (
                            <div>
                                {
                                    station == runningStation && (
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

                                <div className="singleStation" key={station?.id}>
                                    <p>{station?.name}</p>
                                    <p>{station?.frequency}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className='radioFooter'>
                    <p className='footerTitle'>CURRENTLY PLAYING</p>
                    <p className='currentPlaying'>{runningStation?.name}</p>

                </div>
            </div>
        </div>
    );
};

export default CurrentStation;