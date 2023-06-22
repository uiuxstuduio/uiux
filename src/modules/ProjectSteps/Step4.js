import React from "react";
import pagesCardData from './pagesCardData';

const Step4 = ({ handleInputChange, formData }) => {

    return (
        <React.Fragment>
            <div className="step-4 step-content">
                <h2 className='stepHeading'>Select Pages</h2>

                <div className='select-pages-wrapper'>
                    <div className='inner-wrapper'>

                        {pagesCardData.map((pd, index) => (
                            <label htmlFor={'page' + index} key={index} >
                                <div className={`page-card ${formData.pages.includes(pd.label) ? 'checked' : ''}`}>
                                    <input type="checkbox" name='pages' value={pd.label} id={'page' + index} onChange={handleInputChange} checked={formData.pages.includes(pd.label)} />
                                    <img src={pd.image} alt="Icon" />
                                    <h6>{pd.label}</h6>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Step4;