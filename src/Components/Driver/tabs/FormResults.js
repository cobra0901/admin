import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../../../css/main.css';
import axios from 'axios';
import {SERVER_URL} from '../../../Constant/config'

let date = "active";

export class FormResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isDisabled: true,
            isDisabledUpdate:true,
            isDisabledactive:true,
            active_view:''
        };
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    };

    componentDidUpdate(prevProps) {

        if (this.props.results.length < 1 && this.props.results !== prevProps.results) {
            this.setState({
                isDisabledUpdate:true,
                FirstName: '',
                LastName: '',
                Email: '',
                Mobile: '',
                FirstNameAC: '',
                LastNameAC: '',
                IFSC: '',
                City: '',
                State: '',
                Pincode: '',
                Age: '',
                Account_Number: '',
                AddressLine1: '',
                AddressLine2: '',
                AddressLine3: '',
                Created_Date: '',
                Updated_Date: '',
                id: '',
                active_view:'',
                TotalAmount: ''

            });
        }

        if (this.props.results.length > 0 && this.props.results !== prevProps.results) {
            this.setState({
                isDisabledUpdate:false,
                FirstName: this.props.results[0].FirstName,
                LastName: this.props.results[0].LastName,
                Email: this.props.results[0].Email,
                Mobile: this.props.results[0].Mobile,
                FirstNameAC: this.props.results[0].FirstNameAC,
                LastNameAC: this.props.results[0].LastNameAC,
                IFSC: this.props.results[0].IFSC,
                City: this.props.results[0].City,
                State: this.props.results[0].State,
                Pincode: this.props.results[0].Pincode,
                Age: this.props.results[0].Age,
                Account_Number: this.props.results[0].Account_Number,
                AddressLine1: this.props.results[0].AddressLine1,
                AddressLine2: this.props.results[0].AddressLine2,
                AddressLine3: this.props.results[0].AddressLine3,
                Created_Date: this.props.results[0].Created_Date,
                Updated_Date: this.props.results[0].Updated_Date,
                id: this.props.results[0].id,
                active_view:'active'
            });

            console.log('Updated_Date',this.props.results[0].Updated_Date);

            if(this.props.results[0].Updated_Date === 'deactivated' ){
                console.log('Deativeated',this.state.active_view);
                this.setState({active_view:'deactivated'});

            }else {
                console.log('Actived',this.state.active_view);
            }
        }



        if (this.props.transactions.length > 0 && this.props.transactions !== prevProps.transactions) {
            this.setState({
                TotalAmount: this.props.transactions[0].TotalAmount,
            });
        }

        if (this.props.buses.length > 0 && this.props.buses !== prevProps.buses) {
            this.setState({
                Bus_ID: this.props.buses[0].Bus_ID,
                id: this.props.buses[0].id,
                Card_Reader_ID1: this.props.buses[0].Card_Reader_ID1,
                Card_Reader_ID2: this.props.buses[0].Card_Reader_ID2,
                Controller_ID: this.props.buses[0].Controller_ID,
                AdPanelID: this.props.buses[0].AdPanelID,
            });
        }
    }

    onhandleClickEnabled(){
        this.setState({
            isDisabled: false,
            isDisabledactive:false,

        })
    }

    handleUpdateSave(){

        if(this.state.Updated_Date === 'deactivated'){
            date = "deactivated";
        }

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
            Age: this.state.Age,
            Updated_Date:date,
            FirstNameAC: this.state.FirstNameAC,
            LastNameAC: this.state.LastNameAC,
            Account_Number: this.state.Account_Number,
            IFSC: this.state.IFSC,
            AddressLine1: this.state.AddressLine1,
            AddressLine2: this.state.AddressLine2,
            AddressLine3: this.state.AddressLine3,
            id: this.state.id,
        };

        axios({
            method: 'put',
            url: `${SERVER_URL}driver/${this.state.id}`,
            data: value,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {

                   // console.log(response.data)
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    handleDeActive(){

        const block =  {

            Updated_Date: "deactivated",
            id: this.state.id,
        };

        axios({
            method: 'put',
            url: `${SERVER_URL}/driver/block/${this.state.id}`,
            data: block,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
            .catch(function (response) {
                console.log(response);
            });
            window.location.reload();
    }


    render() {

        return (

                   <div>
                        <Col xs={12} md={4}>
                            <label>FirstName</label><input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>LastName</label><input type="text" name="LastName" value={this.state.LastName} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Email</label><input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Mobile</label><input type="text" name="Mobile" value={this.state.Mobile} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>City</label><input type="text" name="City" value={this.state.City} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>State</label><input type="text" name="State" value={this.state.State} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Pincode</label><input type="text" name="Pincode" value={this.state.Pincode} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Age</label><input type="text" name="Age" value={this.state.Age} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        </Col>

                        <Col xs={12} md={4}>
                            <label>FirstNameAC</label><input type="text" name="FirstNameAC" value={this.state.FirstNameAC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>LastNameAC</label><input type="text" name="LastNameAC" value={this.state.LastNameAC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Account_Number</label><input type="text" name="Account_Number" value={this.state.Account_Number} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>IFSC</label><input type="text" name="IFSC" value={this.state.IFSC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>AddressLine1</label><input type="text" name="AddressLine1" value={this.state.AddressLine1} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>AddressLine2</label><input type="text" name="AddressLine2" value={this.state.AddressLine2} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>AddressLine3</label><input type="text" name="AddressLine3" value={this.state.AddressLine3}
                                                                onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                           </Col>

                        <Col xs={12} md={4}>

                            <label>Created Date</label><span>{this.state.Created_Date}</span><br/>
                            <label>Updated Date</label><span>{this.state.Updated_Date}</span><br/>
                            <label>Total Earning</label><span>{this.state.TotalAmount}</span><br/>
                            <label>Status</label><span>{this.state.active_view}</span><br/>

                            <Button style={{marginBottom:20,marginTop:30}} onClick={this.onhandleClickEnabled.bind(this)} disabled={this.state.isDisabledUpdate}>Update</Button>
                            <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.handleUpdateSave.bind(this)} disabled={this.state.isDisabled}>Save</Button>
                            <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.handleDeActive.bind(this)} disabled={this.state.isDisabledactive}>Deactive</Button>

                        </Col>
                   </div>
        );
    }
}