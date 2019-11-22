import React, { Component } from 'react';
import './App.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { InputGroup, Label, FormGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Menu from './Menu';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import SweetAlert from 'sweetalert2-react';

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

export default class App extends Component {

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

  render() {
    return (
      <div className="App container">
        <Card>
          <CardBody>
            <div>
              <h4>Coffex</h4>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                className={useStyles.textField}
                label="Outlined"
                margin="normal"
                type="email"
                variant="outlined"
                value={this.state.email}
                onChange={(ev) => { this.getData(ev.target.value, 'email') }}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                className={useStyles.textField}
                label="Outlined"
                margin="normal"
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
                    onClick={() => this.setState({ show: true })}>
                    {/* onClick={this.submitLogin}>  */}
                    Ingresar
                    </Button>
                </div>
              </div>
            </div>
            <Router>
            <Link to="/menu">{this.state.name}</Link>
            
            <Switch>
          <Route path="/menu" component={Menu}>
            
          </Route>
          </Switch>
          </Router>
          </CardBody>
        </Card>


        <SweetAlert
          show={this.state.show}
          title="Demo"
          text="SweetAlert in React"
          onConfirm={() => this.setState({ show: false })}
        />


      </div>
    );
  }
}

function Main(){
  return <p>Main</p>
}
