import React from "react";
import laptopIcon from '../../assets/images/icon/laptop-icon.svg';

const websiteTypes = [
    {
        id: '1',
        label: 'Business website'
    },
    {
        id: '2',
        label: 'Ecommerce website'
    },
    {
        id: '3',
        label: 'Blog website'
    },
    {
        id: '4',
        label: 'Portfolio website'
    },
    {
        id: '5',
        label: 'Landing Page'
    },
    {
        id: '6',
        label: 'Campaign Landing'
    },
];

const Step1 = ({ handleInputChange, formData, setActiveWebsite, activeWebsite }) => {
    return (
        <React.Fragment>
            <div className="step-1 step-content">
                <h2 className='stepHeading'>What type of website do you need?</h2>

                <div className='website-wrapper'>
                    <div className='row gy-4'>
                        {websiteTypes.map((l, index) => {
                            // console.log(l.label)
                            return (
                                <div className='col-lg-4 col-md-4 col-sm-6 col-12' key={l.id}>
                                    <label>
                                        <input value={l.label} type="radio" name="websiteType" id={'websiteType' + index} onChange={handleInputChange} checked={formData.websiteType === l.label} />
                                        <div onClick={() => setActiveWebsite(l)} className={`wrapper ${activeWebsite === l && 'active'}`}>
                                            <img src={laptopIcon} alt="" />
                                            <h6>{l.label}</h6>
                                        </div>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Step1;