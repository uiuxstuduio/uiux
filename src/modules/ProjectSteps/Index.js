import React, { useState, useEffect } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';

import stepImg from '../../assets/images/steps-img.png';
import logo from '../../assets/images/logo.svg'

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from "./utils";

import './projectSteps.scss';
import { useNavigate } from 'react-router';
const initialFormData = Object({
  websiteType: "",
  industry: "",
  fullname: "",
  phone: "",
  email: "",
  company: "",
  address: "",
  file: "",
  card_num: "",
  card_name: "",
  cvv: "",
  expiry_date: "",
  billing_address: "",
  design: "",
  pages: [],
});

const Steps = () => {
  const Navigate = useNavigate();
  const [activestep, setactivestep] = useState(0);
  const [formData, updateFormData] = useState(initialFormData);
  const [validations, setValidations] = useState({ fullname: '', email: '', phone: '', company: '', address: '' });

  const [activePages, setActivePages] = useState([]);
  const [phone, setPhone] = useState();
  const [activeWebsite, setActiveWebsite] = useState(null);
  const [activeDesign, setActiveDesign] = useState(null);

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  var isChecked = [...activePages];

  useEffect(() => {
    if (!file) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [file]);

  const handleFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined)
      return
    }
    setFile(e.target.files[0]);
  }


  // const handleCheckedPages = (e) => {

  //   if (e.target.checked) {
  //     isChecked = [...activePages, e.target.value];
  //     console.log(e.target.value)
  //     e.currentTarget.parentElement.classList.add('checked');
  //   } else {
  //     isChecked.splice(activePages.indexOf(e.target.value), 1);
  //     e.currentTarget.parentElement.classList.remove('checked');
  //   }
  //   // console.log(activePages, "pages")
  //   setActivePages(isChecked);
  //   // console.log('All selected page names>>', isChecked);
  // }

  // ================================

  const handleInputChange = (e) => {

    if (activestep === 3) {
      if (e.target.checked) {
        isChecked = [...activePages, e.target.value];
        e.currentTarget.parentElement.classList.add('checked');
      } else {
        isChecked.splice(activePages.indexOf(e.target.value), 1);
        e.currentTarget.parentElement.classList.remove('checked');
      }
      setActivePages(isChecked);
    }

    formData.phone = `+${phone}`;
    formData.fullname = formData.fullname;
    formData.email = formData.email;
    formData.company = formData.company;
    formData.card_name = formData.card_name;
    formData.address = formData.address;

    formData.billing_address = formData.address;
    formData.websiteType = formData.websiteType;
    formData.industry = formData.industry;
    formData.design = formData.design;

    if (e.target.name === "card_num") {
      e.target.value = formatCreditCardNumber(e.target.value);
    } else if (e.target.name === "expiry_date") {
      e.target.value = formatExpirationDate(e.target.value);
    } else if (e.target.name === "cvv") {
      e.target.value = formatCVC(e.target.value);
    }
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
      pages: isChecked,

    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submitted form data displayed in console (Check console on submitting the form for entered data)


    const isValid = validateAll()

    if (!isValid) {
      alert('Please fill all feilds in the form!');
      return false;
    } else {
      // console.log("Form Data >>> ", formData);
      Navigate('/thankyou');
    }
  };

  // Steps HTML here in object
  const allSteps = [
    // Step 1: HTML
    {
      label: 'Step 1',
      title: 'What type of website do you need?',
      content: <Step1 handleInputChange={handleInputChange} formData={formData} setActiveWebsite={setActiveWebsite}
        activeWebsite={activeWebsite} />,
      isStepValid: undefined,
    },
    // Step 2: HTML
    {
      label: 'Step 2',
      title: 'What is your industry?',
      content: <Step2 handleInputChange={handleInputChange} formData={formData} />,
      isStepValid: undefined,
    },
    // Step 3: HTML
    {
      label: 'Step 3',
      title: 'Pick your design',
      content: <Step3 handleInputChange={handleInputChange} setActiveDesign={setActiveDesign} activeDesign={activeDesign} />,
      isStepValid: undefined,
    },
    // Step 4: HTML
    {
      label: 'Step 4',
      title: 'Select Pages',
      content: <Step4 handleInputChange={handleInputChange} formData={formData} />,
      isStepValid: undefined,
    },
    // Step 5: HTML
    {
      label: 'Step 5',
      title: 'Please Fill Information',
      content: <Step5 handleInputChange={handleInputChange} formData={formData} phone={phone} setPhone={setPhone}
        handleFile={handleFile} file={file} preview={preview} />,
      isStepValid: undefined,
    },
    // Step 6: HTML
    {
      label: 'Step 6',
      title: 'Overview',
      content: <Step6 formData={formData} />,
      isStepValid: undefined,
    },
    // Step 7: HTML
    {
      label: 'Step 7',
      title: 'Secure Payment',
      content: <Step7 handleInputChange={handleInputChange} formData={formData} />,
      isStepValid: undefined,
    }
  ];

  const validateAll = () => {
    const { fullname, email, company, phone, address } = formData;
    let isValid = true;

    if (!fullname) {
      validations.fullname = 'Full Name is required';
      isValid = false;
    }

    if (!email) {
      validations.email = 'Email is required';
      isValid = false;
    }

    if (!phone) {
      validations.phone = 'Phone is required';
      isValid = false;
    }

    if (!company) {
      validations.company = 'Company Name is required';
      isValid = false;
    }

    if (!address) {
      validations.address = 'Address is required';
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations)
    }

    return isValid
  }

  // Prev & Next Button Functions for Steps
  const handleStepNext = () => {
    const isValid = validateAll()
    // if (!isValid) {
    //   return false;
    // }
    setactivestep((prevactivestep) => prevactivestep + 1);
  };

  const handleStepBack = () => {
    setactivestep((prevactivestep) => prevactivestep - 1);
  };

  // ================================

  return (
    <React.Fragment>
      <div className='stepsMain_wrapper'>
        <div className='stepsMain'>
          <div className='steps_block'>
            <img src={logo} alt="" />
            {/* Stepper Indicator */}
            <Stepper activestep={activestep}>
              {allSteps.map((index) => {
                // console.log(index)
                return (
                  <Step key={index.label}>
                    <StepLabel><span className='step-indicator'></span></StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {/* Current Step out of Total Step */}
            <div className='steps-count'>
              <Typography>{activestep === allSteps.length ? 'All steps are finished' : `${activestep + 1} / 7`}</Typography>
            </div>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>

              {/* Step Body - Changing as per selected setop */}
              <div className="stepper-body">
                {allSteps[activestep].content}
              </div>

              {/* Nav Buttons (Back/Next Step) */}
              {activestep === allSteps.length - 1 ?
                " " :
                <div className='btn-group' activestep={activestep}>
                  <button className='step-btn back-btn' type='button' onClick={handleStepBack}>Back</button>
                  <button className='step-btn next-btn' type='button' onClick={handleStepNext}>Next Step</button>
                </div>
              }

            </form>
          </div>

          {/* Main Side Img */}
          <div className='steps_img'>
            <img src={stepImg} alt="Steps Image" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Steps;