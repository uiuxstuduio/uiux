import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const industries = ['Industry 1', 'Industry 2', 'Industry 3', 'Industry 4', 'Industry 5'];

const Step2 = ({ handleInputChange, formData }) => {
    return (
        <React.Fragment>
            <div className='step-2 step-content'>
                <h2 className='stepHeading'>What is your industry?</h2>

                <div className="industry-wrapper">

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Industries</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Industries"
                            name="industry"
                            onChange={handleInputChange}
                            value={formData.industry}
                        >

                            {industries.map((i, index) => (
                                // console.log(index)
                                <MenuItem key={index} value={i} >{i}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Step2;