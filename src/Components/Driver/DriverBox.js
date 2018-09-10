import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './index.css'
import '../../css/main.css'
import {FormResults} from "./tabs/FormResults";
import {ContentTab} from "./ContentTab";
import {SERVER_URL} from "../../Constant/config";
import axios from 'axios';

export class DriverBox extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
            rideDetails:[],
            topupDetails:[],
            histories:[],
            transactions:[],
            services:[],
            buses:[],
            changeRoutes:[],
            changeDevices:[],
            busid:''
        };
    }

    onhandleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        let val = this.state.busid;

        if(this.state.busid === ''){
            alert("please insert your busid");
            return;
        }

        axios.get(SERVER_URL + `driver/${val}`)
            .then(res => {
                const results = res.data;
                this.setState({ results });
            });

        axios.get(SERVER_URL + `bus/${val}`)
            .then(res => {
                const buses = res.data;
                this.setState({ buses });
            });

        axios.get(SERVER_URL + `ridehistoryD/${val}`)
            .then(res => {
                const rideDetails = res.data;
                this.setState({ rideDetails });
            });

        axios.get(SERVER_URL + `transactionWeekly/byBus/${val}`)
            .then(res => {
                const transactions = res.data;
                this.setState({ transactions });
            });

        axios.get(SERVER_URL + `topuphistory/BusID/${val}`)
            .then(res => {
                const topupDetails = res.data;
                this.setState({ topupDetails });
            });

        axios.get(SERVER_URL + `reportservice`)
            .then(res => {
                const services = res.data;
                this.setState({ services });
            });

        axios.get(SERVER_URL + `reportchangeroute`)
            .then(res => {
                const changeRoutes = res.data;
                this.setState({ changeRoutes });
            });

        axios.get(SERVER_URL + `reportchangedevice`)
            .then(res => {
                const changeDevices = res.data;
                this.setState({ changeDevices });
            });
    }

    render() {

        return (
            <div className="input-view">

                <Row>

                    <Col xs={12} md={12}>
                        <label className="mb-30">Enter Bus ID</label>
                        <input type="text" name="busid" value = {this.state.busid} onChange={this.onhandleChange.bind(this)} required/>
                        <Button onClick={this.handleClick.bind(this)}>Insert</Button>
                    </Col>

                    <FormResults results={this.state.results} buses={this.state.buses} transactions={this.state.transactions}/>

                    <ContentTab
                        rideDetails={this.state.rideDetails}
                        topupDetails={this.state.topupDetails}
                        histories={this.state.histories}
                        transactions={this.state.transactions}
                        services={this.state.services}
                        changeRoutes={this.state.changeRoutes}
                        changeDevices={this.state.changeDevices}
                    />

                </Row>
            </div>

        );
    }

}






