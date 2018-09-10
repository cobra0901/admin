import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './index.css'
import '../../css/main.css'
import {FormResults} from "./tabs/FormResults";
import {ContentTab} from "./ContentTab";
import {SERVER_URL} from '../../Constant/config'
import axios from 'axios';

export class InputBox extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
            isDisabled:true,
            cards:[],
            ridehistories:[],
            topuphistories:[],
            reportblocks:[],
            cardNumber:''
        };
    }

    onhandleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        let val = this.state.cardNumber;

        if(this.state.cardNumber === ''){
            alert("please insert your cardnumber");
            return;
        }

        axios.get(SERVER_URL + `users/${val}`)
            .then(res => {
                const results = res.data;
                this.setState({ results });
            });

        axios.get(SERVER_URL + `card/${val}`)
            .then(res => {
                const cards = res.data;
                this.setState({ cards });
            });

        axios.get(SERVER_URL + `rideHistory/${val}`)
            .then(res => {
                const ridehistories = res.data;
                this.setState({ ridehistories });
            });

        axios.get(SERVER_URL + `topuphistory/CardID/${val}`)
            .then(res => {
                const topuphistories = res.data;
                this.setState({ topuphistories });
            });

        axios.get(SERVER_URL + `reportblock/${val}`)
            .then(res => {
                const reportblocks = res.data;
                this.setState({ reportblocks });
            });

    }

    render() {

            return (
                <div className="input-view">

                    <Row>

                        <Col xs={12} md={12}>
                            <label className="mb-30">Enter Card Number</label>
                            <input type="text" name="cardNumber" value = {this.state.cardNumber} onChange={this.onhandleChange.bind(this)} required/>
                            <Button onClick={this.handleClick.bind(this)}>Insert</Button>
                        </Col>

                        <br/>

                        <FormResults isDisabled={this.state.isDisabled} cards={this.state.cards} results={this.state.results}/>

                        <ContentTab
                            cards={this.state.cards}
                            ridehistories={this.state.ridehistories}
                            topuphistories={this.state.topuphistories}
                            reportblocks={this.state.reportblocks}
                        />

                    </Row>
                </div>

            );
        }

}






