import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

function DropdownList({ options }) {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select an option"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            style: { fontSize: '12px', height: '12px' },
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
