import React, { Component } from 'react';
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

export default class LoginPages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail:false,
            errorPassword: false,
            messageErrorEmail: '',
            messageErrorPassword: ''
        }
    }


    validateForm(value, property) {
        let state = {}
        state[property] = value;
        this.setState(state);
        console.log("email: " + this.state.email + " password: " + this.state.password)
        if (this.state.email == value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && this.state.password == value.length >= 6) {
            console.log('es match')
        } else {
            console.log('no es match')
        }
    }

    submitLogin = () => {
        if (this.state.email === '' && this.state.password === '') {
            this.setState({
                errorEmail: true,
                errorPassword:true,
                messageErrorEmail: 'Campo Obligatorio',
                messageErrorPassword: 'Campo Obligatorio'
            })
        } else if (this.state.email === '' && !this.state.password === '') {
            this.setState({
                errorEmail: true,
                errorPassword:false,
                messageErrorEmail: 'Campo Obligatorio',
                messageErrorPassword: ''
            })
        } else if (!this.state.email === '' && this.state.password === '') {
            this.setState({
                errorEmail: false,
                errorPassword:true,
                messageErrorEmail: '',
                messageErrorPassword: 'Campo Obligatorio'
            })
        } else {
            this.setState({
                errorEmail: false,
                errorPassword:false,
                messageErrorEmail: '',
                messageErrorPassword: ''
            })
            this.props.history.push('/menu')
        }
    }

    render() {
        return (
            <div className="App container login">
                <Card>
                    <CardBody>
                        <div>
                            <h4>Coffex</h4>
                        </div>
                        <div>

                            <TextField
                                error={this.state.errorEmail}
                                id="txt_username"
                                className={useStyles.textField}
                                label="Username"
                                margin="normal"
                                type="email"
                                name="email"
                                helperText={this.state.messageErrorEmail}
                                variant="outlined"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.validateForm(event.target.value, 'email')
                                }}
                            />
                        </div>

                        <div>
                            <TextField
                                error={this.state.errorPassword}
                                id="txt_password"
                                className={useStyles.textField}
                                label="Password"
                                margin="normal"
                                name="password"
                                helperText={this.state.messageErrorPassword}
                                type="password"
                                variant="outlined"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.validateForm(event.target.value, 'password')
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        
                                      >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                            />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={
                                            this.submitLogin
                                        }>Ingresar
                                        </Button>
                                </div>
                            </div>
                        </div>

                    </CardBody>
                </Card>

                <SweetAlert
                    show={this.state.show}
                    title="Demo"
                    text="SweetAlert in React js"
                    onConfirm={() => {
                        this.setState({ show: false })
                    }
                    }
                />
            </div>
        )
    }

}