import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Container,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { updateUserInfo } from '../api';
import { skills } from '../constants';
import { toast } from 'react-toastify';

const EditUserProfile = ({ userData }) => {
  const [formData, setFormData] = useState(userData);

 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (event) => {
    setFormData({
      ...formData,
      services: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send updated data to the server
    // Example: updateUserData(formData);
    console.log(event)
    console.log(formData)
    const success = await updateUserInfo(formData);

    if (success) {
      console.log('User updated successfully');
      toast.success("Changes saved successfully")
      // Perform any additional actions or state updates
    } else {
      console.error('Failed to update user');
      success.error("Internal error occured. Please try again")
      // Handle error, show error message, etc.
    }
  };

  const containerStyles = {
    maxWidth: '400px', // Set a maximum width for the container
    margin: '0 auto', // Center the container horizontally
  };

  const fieldStyles = {
    marginBottom: '20px',
    width: '120%', // Equal width for all fields
  };

  const selectStyles = {
    marginBottom: '20px',
    width: '100%', // Equal width for all fields
  };

  const buttonStyles = {
    marginTop: '20px',
  };

  

  return (
    <Container style={containerStyles}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          style={fieldStyles}
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          disabled
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          style={fieldStyles}
        />
        <TextField
          name="mobileNumber"
          label="Mobile Number"
          value={formData.mobileNumber || ''}
          onChange={handleInputChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton>
                <EditIcon />
              </IconButton>
            ),
          }}
          style={fieldStyles}
        />
        {userData.role==="Worker" && <FormControl fullWidth style={fieldStyles}>
          <InputLabel htmlFor="skills-select">Skills</InputLabel>
          <Select
            name="skills"
            multiple
            value={formData.services || []}
            onChange={handleSkillsChange}
            renderValue={(selected) => selected.join(', ')}
            style={selectStyles}
            id="skills-select"
          >
            {skills.map((skill) => (
              <MenuItem key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>}
        <Button type="submit" variant="contained" color="primary" style={buttonStyles}>
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditUserProfile;
