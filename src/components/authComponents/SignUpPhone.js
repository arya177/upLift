import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import { signInWithPhoneNumber,getAuth, RecaptchaVerifier } from "firebase/auth";
import {auth} from '../../firebase'


const SignUpPhone = () => {
    const [showCode, setShowCode] = useState(false)
    const [phoneNo, setPhoneNo] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneno: ''
    });

    const handlePhoneNoChange = (event) => {
        const input = event.target.value.replace(/[^+\d\s]/g, ''); // Remove non-numeric characters
        setPhoneNo(input);
    };

    const handleInputChange = (e) => {
        
        const { name, value } = e.target;
        if(name=="phoneno") handlePhoneNoChange(e)
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
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


    //submit
    // const auth = getAuth()
    
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(formData)
        if(formData.firstName==='' || formData.lastName==='' || formData.phoneno===''){
            toast.error('Please fill up all the fields')
            return
        } 
        
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha_verifier', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              
            }
        },auth);
        setShowCode(true)
        const phoneNumber = formData.phoneno;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log(confirmationResult)
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log(error)
        });
    }
    return(
        <>
            {!showCode && 
            <div>
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
                <TextField
                    name="phoneno"
                    value={formData.phoneno}
                    onChange={handleInputChange}
                    id="outlined-basic"
                    label="Phone No"
                    variant="outlined"
                    placeholder='+910000000000'
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    }}
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
            <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', marginTop:'30px', flexDirection:'column'}}>
                    <button
                        style={buttonStyles}
                        type='submit'
                        onClick={submitHandler}
                        id="recaptcha_verifier"
                    >
                        <p style={{margin:'10px', fontSize: '18px', padding:'0px'}}>Send Confirmation Code</p>
                    </button>
                    <div style={{display:'flex', flexDirection:'column', alignItems: 'center',marginTop:'15px'}}>
                        <p style={{lineHeight:1, margin: '2px', padding:'0', color:'grey'}}>Clicking this button will send you a SMS with code</p>
                        <p style={{lineHeight:1, margin: '2px', padding:'0', color:'grey'}}>on the number you entered</p>
                    </div>

            </div>
            {/* <div id="recaptcha_verifier"></div> */}
            </div>}
            {showCode && 
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
                        <p>Enter the OTP sent on your number</p>
                        <TextField id="outlined-basic" 
                            label="OTP" 
                            name="otp"
                            // value={formData.otp}
                            // onChange={handleInputChange}
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
                    <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', marginTop:'30px'}}>
                    <button
                        style={buttonStyles}
                        type='submit'
                        onClick={submitHandler}

                    >
                        <p style={{margin:'10px', fontSize: '18px', padding:'0px'}}>Verify</p>
                    </button>
                    </div>
                    {/* <div id="recaptcha_verifier"></div> */}
                </div>}
        </>
    )
}
export default SignUpPhone;