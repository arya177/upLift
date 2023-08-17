import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

function DropdownList({ options, onSelect }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (event, value) => {
        setSelectedOption(value);
        onSelect(value); // Call the onSelect function with the selected value
    };

    return (
        <Autocomplete
            options={options}
            value={selectedOption}
            onChange={handleOptionSelect}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select an option"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        style: { fontSize: '12px', height: '45px' },
                    }}
                    InputLabelProps={{
                        style: { fontSize: '14px' },
                    }}
                />
            )}
        />
    );
}

export default DropdownList;
