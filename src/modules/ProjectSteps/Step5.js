import React, {  useState } from "react";

import facebook from '../../assets/images/icon/facebook-icon.svg';
import instagram from '../../assets/images/icon/instagram-icon.svg';
import add from '../../assets/images/icon/add-icon.svg';
import imageIcon from '../../assets/images/icon/image-icon.svg';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Step5 = ({ handleInputChange, formData, phone, setPhone, handleFile, file, preview }) => {

    const [validations, setValidations] = useState({ fullname: '', email: '', phone: '', company: '', address: '' });

    const validateOne = (e) => {
        const { name } = e.target
        const value = formData[name]
        let message = ''

        // if (!value) {
        //   message = `${name} is required`
        // }

        if (value && name === 'fullname' && (value.length < 3 || value.length > 50)) {
            message = 'Name must contain between 3 and 50 characters';
        }

        if (value && name === 'company' && (value.length < 3 || value.length > 50)) {
            message = 'Company Name must contain between 3 and 50 characters';
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Email format must be as example@mail.com';
        }

        if (value && name === 'address' && (value.length < 10 || value.length > 30)) {
            message = 'Address must be altest 10 characters';
        }

        setValidations({ ...validations, [name]: message })
    }

    // Profile Picture Img File Handling on Step 5
    // create a preview as a side effect, whenever selected file is changed

    const {
        fullname: nameVal,
        email: emailVal,
        phone: phoneVal,
        company: companyVal,
        address: addressVal,
    } = validations;

    return (
        <React.Fragment>
            <div className="step-5 step-content">
                <h2 className='stepHeading'>Please Fill Information</h2>

                <div className='form-wrapper'>

                    <div className='form-group'>
                        <label htmlFor="" className='form-label'>Full Name</label>
                        <input type="text" placeholder='Full Name' name='fullname' className='form-control' onChange={handleInputChange} onBlur={validateOne} value={formData.fullname} />
                        <label className='text-danger'>{nameVal}</label>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>

                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Phone</label>
                                <PhoneInput
                                    specialLabel={''}
                                    country={'us'}
                                    name="phone"
                                    value={phone}
                                    onChange={setPhone}
                                    onBlur={validateOne}
                                />
                                <label className='text-danger'>{phoneVal}</label>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>

                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Email</label>
                                <input type="email" placeholder='Example@email.com' name='email' className='form-control' onChange={handleInputChange} onBlur={validateOne} value={formData.email} />
                                <label className='text-danger'>{emailVal}</label>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>

                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Company Name</label>
                                <input type="text" placeholder='Company Name' name='company' className='form-control' onChange={handleInputChange} onBlur={validateOne} value={formData.company} />
                                <label className='text-danger'>{companyVal}</label>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>

                            <div className='form-group'>
                                <label htmlFor="" className='form-label'>Social Link</label>
                                <div className='social-group'>
                                    <span><img src={facebook} alt="" /></span>
                                    <span><img src={instagram} alt="" /></span>
                                    <span><img src={add} alt="" /></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='form-label'>Address</label>
                        <textarea name="address" placeholder='Address' row="20" className='form-control' onChange={handleInputChange} onBlur={validateOne} required value={formData.address}></textarea>
                        <label className='text-danger'>{addressVal}</label>
                    </div>

                    <div className='form-group'>
                        <div className='fileUpload'>
                            <div className='img-wrapper'>
                                <img src={file ? preview : imageIcon} className={file ? 'uploadedImg' : ''} alt="" />
                            </div>
                            <p>{file ? file.name : 'Upload a profile pictures. Max Size 2 MB'}</p>
                            <span className='browse-btn'>Browse</span>
                            <input type="file" id="fileUpload" className='fileInput' name='file' onInput={handleFile} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Step5;