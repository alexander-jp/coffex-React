import React, { Component } from 'react';
import '../App.css';
//
import { Card, CardBody } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SweetAlert from 'sweetalert2-react';
import Routes from '../Routes';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from '../components/Menu';
import {BrowserRouter} from 'react-router-dom';

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
            name: ''
        }

    }

    getData = (value, property) => {
        let data = {};
        data[property] = value;
        this.setState(data);
        this.setState({
            name: this.state.email
        })

    }

    submitLogin = () => {
        this.setState({
            name: this.state.email
        })
    }

    validateForm = () =>{
        this.setState({ show: true })
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
                                id="txt_username"
                                className={useStyles.textField}
                                label="Username"
                                margin="normal"
                                type="email"
                                name="email"
                                variant="outlined"
                                value={this.state.email}
                                onChange={(ev) => { this.getData(ev.target.value, 'email') }}
                            />
                        </div>

                        <div>
                            <TextField
                                id="txt_password"
                                className={useStyles.textField}
                                label="Password"
                                margin="normal"
                                name="password"
                                type="password"
                                variant="outlined"
                            />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={
                                          this.validateForm
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
                        this.props.history.push('/menu')
                    }
                }
                />
            </div>
        )
    }

}