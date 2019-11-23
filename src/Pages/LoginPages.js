import React, { useState } from 'react';
import '../App.css';
//
import { Card, CardBody } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SweetAlert from 'sweetalert2-react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Email from '@material-ui/icons/EmailRounded';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Lock from '@material-ui/icons/LockRounded';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function LoginPages() {

    const [values, setValues] = useState({
        amount: '',
        weight: '',
        weightRange: '',
        showPassword: false
    });

    const [data, setData] = useState({
        email: '',
        password: '',
        messageErrorEmail:'',
        messageErrorPassword:''

    });

    const [show, setShow] = useState(true);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    let validateForm = (value, property) => {
        const state = {};
        state[property] = value;
        setData({
            email: state.email,
            password: state.password
        })

        console.log("email: " + data.email + " password: " + data.password)
        if (data.email == value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && data.password == value.length >= 6) {
            console.log('es match')
        } else {
            console.log('no es match')
        }
    }

    const submitLogin = () => {
        if (data.email === '' && data.password === '') {
            setErrorEmail({errorEmail: true})
            setErrorPassword({errorPassword: true})
            setData({
               messageErrorEmail: 'Campo obligatorio',
               messageErrorPassword: 'Campo obligatorio' 
            })
            
        } else if (data.email === '' && !data.password === '') {
            setErrorEmail({errorEmail: true})
            setErrorPassword({errorPassword: false})
            setData({
                messageErrorEmail: 'Campo obligatorio',
                messageErrorPassword: '' 
             })
        } else if (!data.email === '' && data.password === '') {
            setErrorEmail({errorEmail: false})
            setErrorPassword({errorPassword: true})
            setData({
                messageErrorEmail: '',
                messageErrorPassword: 'Campo obligatorio' 
             })
        } else {
            setErrorEmail({errorEmail: false})
            setErrorPassword({errorPassword: false})
            setData({
                messageErrorEmail: '',
                messageErrorPassword: '' 
             })
            //this.props.history.push('/menu')
        }
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

   


    return (
        <div className="App container login">
            <Card>
                <CardBody>
                    <div>
                        <h4>Coffex</h4>
                    </div>

                    <div>
                        <FormControl variant="outlined" className="inputEmail">
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                id="txt_email"
                                error={errorEmail}
                                className={useStyles.textField}
                                type="text"
                                value={data.email || ''}
                                onChange={(event) => {
                                    validateForm(event.target.value, 'email')
                                }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Email/>
                                    </InputAdornment>
                                }
                                labelWidth={100}
                            />
                            <FormHelperText id="outlined-weight-helper-text">{data.messageErrorEmail}</FormHelperText>
                        </FormControl>
                    </div>

                    <p></p>
                    
                    <div>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="txt_password"
                                error={errorPassword}
                                className={useStyles.textField}
                                type={values.showPassword ? 'text' : 'password'}
                                value={data.password || ''}
                                onChange={(event) => {
                                    validateForm(event.target.value, 'password')
                                }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={100}
                            />
                            <FormHelperText id="outlined-weight-helper-text">{data.messageErrorPassword}</FormHelperText>
                        </FormControl>
                    </div>
                    <p></p>

                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={
                                        submitLogin
                                    }>Ingresar
                                        </Button>
                            </div>
                        </div>
                    </div>

                </CardBody>
            </Card>

            <SweetAlert
                show={show}
                title="Demo"
                text="SweetAlert in React js"
                onConfirm={() =>
                    setShow(false)

                }
            />
        </div>
    )
}