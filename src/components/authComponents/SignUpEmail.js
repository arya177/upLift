import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {auth, database} from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { registerUser } from '../../api';

const SignUpEmail = ({role}) => {
    const navigate = useNavigate();
    useEffect(() => {getUserLocation()},[])
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [location, setLocation] = useState({latitude: null, longitude: null});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    //submit

    const writeUserData = () => {
        const uniqueId = uuidv4();
        set(ref(database, 'users/'+uniqueId), {
            username: formData.firstName + formData.lastName,
            email: formData.email,
            role: role
          });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
      
        if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.password === '') {
          toast.error('Please fill up all the fields');
          return;
        }
      
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success('Account created successfully');
            
            // Register user data
            const userData = {
              email: formData.email,
              name: formData.firstName + ' ' + formData.lastName,
              location: [location.latitude, location.longitude],
              role: role, // Make sure "role" is defined
              services: [],
              mobileNumber: '',
            };
      
            registerUser(userData)
              .then(() => {
                // Successfully registered user
                console.log('User registered successfully');
                // Take user to the home page
                navigate('/');
              })
              .catch((error) => {
                console.error('Error registering user:', error);
                // Handle error here
              });
      
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            // Handle error here
          });
      };
      
    //capture location
    const getUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const buttonStyles = {
        display: 'flex',
        width: '500px',
        padding: '0',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        justifyContent:'center'
    };
    return(
        <>
            <form onSubmit={submitHandler}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <TextField id="outlined-basic" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    label="First Name" 
                    variant="outlined" 
                    required
                    sx={{width: '48%', 
                        '& .MuiOutlinedInput-root': {
                        display: 'flex',
                        alignItems: 'center',
                        },
                    }}
                    size="small"
                />
                <TextField id="outlined-basic" 
                    label="Last Name" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    variant="outlined" 
                    required
                    sx={{width: '48%', 
                        '& .MuiOutlinedInput-root': {
                        display: 'flex',
                        alignItems: 'center',
                        },
                    }}
                    size="small"
                />
            </div>
            <div style={{marginTop: '20px'}}>
                <TextField id="outlined-basic"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} 
                    label="eamil id" 
                    variant="outlined" 
                    required
                    sx={{width: '100%', 
                    '& .MuiOutlinedInput-root': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    '& .MuiFormLabel-root': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    
                    }}
                    size="small"
                />
            </div>
            <div>
                <FormControl sx={{ width: '100%', marginTop:'20px' }} variant="outlined">
                <InputLabel
                    htmlFor="outlined-adornment-password"
                >
                    Password
                </InputLabel>

                    <OutlinedInput
                        id="outlined-adornment-password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        required
                        size="small"
                   
                    />
                </FormControl>
            </div>
            <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', marginTop:'30px'}}>
                    <button
                        style={buttonStyles}
                        type='submit'
                        onClick={submitHandler}

                    >
                        <p style={{margin:'10px', fontSize: '18px', padding:'0px'}}>Create Account</p>
                    </button>
            </div>
            </form>
        </>
    )
}
export default SignUpEmail;