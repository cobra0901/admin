import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../../../css/main.css'
import axios from 'axios';
import {SERVER_URL} from '../../../Constant/config'
//let months    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// let today = new Date(),
// date = today.getFullYear()-2000 + '-' + (months[today.getMonth()]) + '-' + today.getDate();

export class FormResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            isDisabled: true,
            isDisabledUpdate:true,
            isDisabledactive:true
        };
    }

    componentDidUpdate(prevProps) {

        if (this.props.results.length < 1 && this.props.results !== prevProps.results) {
                this.setState({
                    isDisabledUpdate:true,
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Mobile: '',
                    MaritalStatus: '',
                    FirstNameAC: '',
                    IFSC: '',
                    City: '',
                    State: '',
                    Pincode: '',
                    Age: '',
                    Profession: '',
                    Account_Number: '',
                    AddressLine1: '',
                    UserID: '',
                    Gender: '',
                    CardNumber: '',
                    LastNameAC: '',
                    AddressLine2: '',
                    AddressLine3: '',
                    Balance: '',
                    ValidFrom: '',
                    ValidTo: '',
                    Isblock: ''
            });
        }

        if (this.props.results.length > 0 && this.props.results !== prevProps.results) {
            this.setState({
                isDisabledUpdate:false,
                FirstName: this.props.results[0].FirstName,
                LastName: this.props.results[0].LastName,
                Email: this.props.results[0].Email,
                Mobile: this.props.results[0].Mobile,
                MaritalStatus: this.props.results[0].MaritalStatus,
                FirstNameAC: this.props.results[0].FirstNameAC,
                IFSC: this.props.results[0].IFSC,
                City: this.props.results[0].City,
                State: this.props.results[0].State,
                Pincode: this.props.results[0].Pincode,
                Age: this.props.results[0].Age,
                Profession: this.props.results[0].Profession,
                Account_Number: this.props.results[0].Account_Number,
                AddressLine1: this.props.results[0].AddressLine1,
                UserID: this.props.results[0].UserID,
                Gender: this.props.results[0].Gender,
                CardNumber: this.props.results[0].CardNumber,
                LastNameAC: this.props.results[0].LastNameAC,
                AddressLine2: this.props.results[0].AddressLine2,
                AddressLine3: this.props.results[0].AddressLine3,
            });

        }

        if (this.props.cards.length > 0 && this.props.cards !== prevProps.cards) {

            if(this.props.cards[0].Isblock === 1){
                this.setState({
                    Balance: this.props.cards[0].Balance,
                    ValidFrom: this.props.cards[0].ValidFrom,
                    ValidTo: this.props.cards[0].ValidTo,
                    Isblock: 'deactivated',

                });
            }else {
                this.setState({
                    Balance: this.props.cards[0].Balance,
                    ValidFrom: this.props.cards[0].ValidFrom,
                    ValidTo: this.props.cards[0].ValidTo,
                    Isblock: 'active',

                });
            }
        }
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    };

    onhandleClickEnabled(){
        this.setState({
            isDisabled: false,
            isDisabledactive:false,
        })
    }

    handleUpdateSave(){

        this.setState({
            isDisabled: true,
            isDisabledactive:true,

        });

        const value = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            Mobile: this.state.Mobile,
            City: this.state.City,
            State: this.state.State,
            Pincode: this.state.Pincode,
            Updated_Date: "active",
            Gender: this.state.Gender,
            Age: this.state.Age,
            MaritalStatus: this.state.MaritalStatus,
            Profession: this.state.Profession,
            FirstNameAC: this.state.FirstNameAC,
            LastNameAC: this.state.LastNameAC,
            Account_Number: this.state.Account_Number,
            IFSC: this.state.IFSC,
            AddressLine1: this.state.AddressLine1,
            AddressLine2: this.state.AddressLine2,
            AddressLine3: this.state.AddressLine3,
            UserID: this.state.UserID
    };

        axios({
            method: 'put',
            url: `${SERVER_URL}users/${this.state.UserID}`,
            data: value,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {

                    console.log(response)
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    handleDeActive(){

        const block =  {
            "Isblock": 1,
            "ValidTo": "deactivated",
            "CardNumber": this.state.CardNumber
        };

        axios({
            method: 'put',
            url: `${SERVER_URL}card/block/${this.state.CardNumber}`,
            data: block,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {

                }
            })
            .catch(function (response) {

            });
        window.location.reload();
    }

    render() {
        return (

            <div>
                <Col xs={12} md={4}>
                    <label>FirstName</label><input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>LastName</label><input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} disabled={this.state.isDisabled}/><br/>
                    <label>Email</label><input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>Mobile</label><input type="text" name="Mobile" value={this.state.Mobile} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>City</label><input type="text" name="City" onChange={this.handleChange} value={this.state.City} disabled={this.state.isDisabled}/><br/>
                    <label>State</label><input type="text" name="State" onChange={this.handleChange} value={this.state.State} disabled={this.state.isDisabled}/><br/>
                    <label>Pincode</label><input type="text" name="Pincode" value={this.state.Pincode} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>Age</label><input type="text" name="Age" value={this.state.Age} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>Gender</label><input type="text" name="Gender" value={this.state.Gender} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>

                </Col>

                <Col xs={12} md={4}>
                    <label>MaritalStatus</label><input type="text" name="MaritalStatus" value={this.state.MaritalStatus} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>Profession</label><input type="text" name="Profession" value={this.state.Profession} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>FirstNameAC</label><input type="text" name="FirstNameAC" value={this.state.FirstNameAC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>LastNameAC</label><input type="text" name="LastNameAC" value={this.state.LastNameAC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>Account_Number</label><input type="text" name="Account_Number" value={this.state.Account_Number} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>IFSC</label><input type="text" name="IFSC" value={this.state.IFSC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>AddressLine1</label><input type="text" name="AddressLine1" value={this.state.AddressLine1} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>AddressLine2</label><input type="text" name="AddressLine2" value={this.state.AddressLine2} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    <label>AddressLine3</label><input type="text" name="AddressLine3" value={this.state.AddressLine3} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                </Col>

                <Col xs={12} md={4}>
                    <label>Valid Form</label><span>{this.state.ValidFrom}</span><br/>
                    <label>Valid To</label><span>{this.state.ValidTo}</span><br/>
                    <label>Balance</label>{this.state.Balance}<span/><br/>
                    <label>Status</label>{this.state.Isblock}<span/><br/>
                </Col>

                <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.onhandleClickEnabled.bind(this)} disabled={this.state.isDisabledUpdate}>Update</Button>
                <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.handleUpdateSave.bind(this)} disabled={this.state.isDisabled}>Save</Button>
                <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.handleDeActive.bind(this)} disabled={this.state.isDisabledactive}>Deactive</Button>

            </div>
         );
    }
}