import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const LoginEmail = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    //submit
    const auth = getAuth();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(formData)
        if(formData.email==='' || formData.password===''){
            toast.error('Please fill up all the fields')
            return
        } 
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success("Logged in successfully")
                navigate("/");
                console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
        });

    }

    //password box
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
        <>
            
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
           
            <div style={{display:'flex', alignItems:'center', width:'100%', justifyContent:'center'}}>
                <button
                    type='submit'
                    onClick={submitHandler}
                    style={{
                        display: 'flex',
                        width: '500px',
                        padding: '0',
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        marginTop: '15px',
                        justifyContent:'center'
                    }}
                >
                    <p style={{margin:'10px', fontSize: '18px', padding:'0px'}}>Continue with Email</p>
                </button>
            </div>
        </>
    )
}
export default LoginEmail;