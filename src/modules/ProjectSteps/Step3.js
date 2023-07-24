import React from "react";
import designCardData from './designCardData';
import saleIcons from '../../assets/images/icon/arrow-square.svg';

const Step3 = ({ handleInputChange, setActiveDesign, activeDesign }) => {


    return (
        <React.Fragment>
            <div className="step-3 step-content">
                <h2 className='stepHeading'>Pick your design</h2>

                <div className='design-wrapper'>
                    <div className='inner-wrapper'>
                        {designCardData.map((dd, index) => (
                            <label htmlFor={'design' + index} key={'design' + index}>
                                <div className={`design-card ${activeDesign === dd.id && 'active'}`} onClick={() => setActiveDesign(dd.id)}>
                                    <input value={dd.label} type="radio" name='design' id={'design' + index} onChange={handleInputChange} />
                                    <span className='checkmark'></span>
                                    <img className='designImg' src={dd.image} alt="designImage" />
                                    <h6>{dd.label}</h6>
                                    <div className='sales-tag'>
                                        <img src={saleIcons} alt="SaleIcon" />
                                        <span>{dd.totalSales}</span>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Step3;