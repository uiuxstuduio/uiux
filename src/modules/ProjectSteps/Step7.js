import React from "react";

const Step7 = ({ handleInputChange, formData }) => {
    return (
        <React.Fragment>
            <div className="step-7 step-content">
                <h2 className='stepHeading'>Secure Payment</h2>

                <div className='payment-wrapper'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Card Number</label>
                                <input type="text" placeholder='Enter Number' pattern="\d*" className='form-control' name='card_num' onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Cardholder Name</label>
                                <input type="text" placeholder='Name' value={formData.card_name} className='form-control' name='card_name' onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>CVV</label>
                                <input type="number" placeholder='Enter CVV' pattern="\d{3,4}" className='form-control' name='cvv' onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Exprity Date</label>
                                <input type="text" placeholder='Enter Exprity Date' pattern="\d\d/\d\d" className='form-control' name='expiry_date' onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='form-label'>Billing address</label>
                        <input type="text" placeholder='Enter Address' className='form-control' value={formData.address} name='billing_address' onChange={handleInputChange} />
                    </div>

                    <div className="form-check form-group">
                        <input className="form-check-input" type="checkbox" id="promo" />
                        <label className="form-check-label" htmlFor="promo">
                            I've a Promo Code
                        </label>
                    </div>

                    <table className='total-payment w-100'>
                        <tr>
                            <td>Subtotal</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Platform fee</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>Total Amount</td>
                            <td>$100</td>
                        </tr>
                    </table>

                    <button className='submit-btn w-100' type='submit'>Make Payment</button>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Step7;