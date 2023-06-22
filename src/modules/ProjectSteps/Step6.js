import React from "react";

import time from '../../assets/images/icon/time.svg';
import dollar from '../../assets/images/icon/dollar.svg';
import selectedDesign from '../../assets/images/design1.png';

const Step6 = ({formData}) => {
    return (
        <React.Fragment>
            <div className="step-5 step-content">
                <h2 className='stepHeading'>Overview</h2>

                <div className='overview-wrapper'>
                    <div className='overview-main'>
                        <div className='inner-wrapper'>
                            <div className='design-card'>
                                <img className='designImg' src={selectedDesign} alt="designImage" />
                            </div>

                            <div className='details'>
                                <h4 className='designName'>{formData.design}</h4>

                                <div className='detail-group'>
                                    <div className='row gy-sm-0 gy-3'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                            <div className='info'>
                                                <label htmlFor="" className='infoLabel'>Website Type:</label>
                                                <p className='infoValue'>{formData.websiteType}</p>
                                            </div>

                                            <div className='info'>
                                                <label htmlFor="" className='infoLabel'>Select industry:</label>
                                                <p className='infoValue'>{formData.industry}</p>
                                            </div>

                                            <div className='info'>
                                                <label htmlFor="" className='infoLabel'>Pick your design:</label>
                                                <p className='infoValue'>#1548</p>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                            <div className='info'>
                                                <label htmlFor="" className='infoLabel'>Select section:</label>
                                                <p className='infoValue'>Header, Slider, Features, CTA...</p>
                                            </div>

                                            <div className='info'>
                                                <label htmlFor="" className='infoLabel'>Select pages:</label>
                                                <p className='infoValue'>{formData.pages.map((p, index) => (
                                                    <span>{p}, </span>
                                                ))}</p>
                                            </div>

                                            <div className='info'>
                                                <label htmlFor="" className='infoLabel'>Attached File:</label>
                                                <p className='infoValue'>{formData.file}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='other-details'>
                        <div className='row gy-sm-0 gy-3'>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                <div className='other-info put-border'>
                                    <img src={time} alt="" />
                                    <div>
                                        <label htmlFor="" className='infoLabel'>Timeline</label>
                                        <p className='infoValue'>15 June, 2023</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                <div className='other-info'>
                                    <img src={dollar} alt="" />
                                    <div>
                                        <label htmlFor="" className='infoLabel'>Estimated Cost</label>
                                        <p className='infoValue'>$ 700.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Step6;