import React from 'react';
import axios from 'axios';
import {CSVLink} from 'react-csv';
import {Table,Button,Modal} from 'react-bootstrap';
import {SERVER_URL} from '../../../Constant/config'
import '../index.css';
import update from 'react-addons-update';

export class Report extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            new_show: false,
            new_UserID: '',
            new_ReportID: '',
            new_Report_Type: '',
            new_CardID: '',
            new_Credit_Amount: '',
            new_Credit_Type: '',
            new_Report_Date: '',
            new_FirstNameAC: '',
            new_LastNameAC: '',
            new_Account_Number: '',
            new_IFSC: '',
            new_AddressLine1: '',
            new_AddressLine2: '',
            new_AddressLine3: '',
            new_Pincode: '',
            data: [],
        };
    }

    handleHide() {
        this.setState({new_show: false});
    }

    handleChange(e) {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    componentDidUpdate(prevProps) {

        if (this.props.reportblocks.length > 0 && this.props.reportblocks !== prevProps.reportblocks) {

            let newState = update(this.state, {
                data: {
                    $set: this.props.reportblocks
                }
            });
            this.setState(newState);
        }
    }

    onhandleInsertReport() {
        const InserData = {
            "UserID": this.state.new_UserID,
            "ReportID": this.state.new_ReportID,
            "Report_Type": this.state.new_Report_Type,
            "CardID": this.state.new_CardID,
            "Credit_Amount": this.state.new_Credit_Amount,
            "Credit_Type": this.state.new_Credit_Type,
            "Report_Date": this.state.new_Report_Date,
            "FirstNameAC": this.state.new_FirstNameAC,
            "LastNameAC": this.state.new_LastNameAC,
            "Account_Number": this.state.new_Account_Number,
            "IFSC": this.state.new_IFSC,
            "AddressLine1": this.state.new_AddressLine1,
            "AddressLine2": this.state.new_AddressLine2,
            "AddressLine3": this.state.new_AddressLine3,
            "Pincode": this.state.new_Pincode
        };

        axios({
            method: 'post',
            url: `${SERVER_URL}reportblock`,
            data: InserData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
            .then(function (response) {
                if (response.status === 200) {

                    console.log("Insert Success");
                    console.log(response);
                }
            })
            .catch(function (response) {
                console.log(response);
                return
            });

        let newState = update(this.state, {
            data: {
                $push: [InserData]
            }
        });
        this.setState(newState);
        this.setState({new_show:false});
        console.log("❤❤D❤a❤t❤a❤❤", this.state.data);

    }

    render() {
        return (
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>UserID</th>
                        <th>ReportID</th>
                        <th>Report_Type</th>
                        <th>CardID</th>
                        <th>Credit_Amount</th>
                        <th>Credit_Type</th>
                        <th>Report_Date</th>
                        <th>FirstNameAC</th>
                        <th>LastNameAC</th>
                        <th>Account_Number</th>
                        <th>IFSC</th>
                        <th>AddressLine1</th>
                        <th>AddressLine2</th>
                        <th>AddressLine3</th>
                        <th>Pincode</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.state.data[index].UserID}</td>
                                <td>{this.state.data[index].ReportID}</td>
                                <td>{this.state.data[index].Report_Type}</td>
                                <td>{this.state.data[index].CardID}</td>
                                <td>{this.state.data[index].Credit_Amount}</td>
                                <td>{this.state.data[index].Credit_Type}</td>
                                <td>{this.state.data[index].Report_Date}</td>
                                <td>{this.state.data[index].FirstNameAC}</td>
                                <td>{this.state.data[index].LastNameAC}</td>
                                <td>{this.state.data[index].Account_Number}</td>
                                <td>{this.state.data[index].IFSC}</td>
                                <td>{this.state.data[index].AddressLine1}</td>
                                <td>{this.state.data[index].AddressLine2}</td>
                                <td>{this.state.data[index].AddressLine3}</td>
                                <td>{this.state.data[index].Pincode}</td>
                            </tr>
                            )})}

                    </tbody>
                </Table>

                <Button bsStyle="info" onClick={() => this.setState({
                    new_show: true})}>New</Button>

                <Button style={{marginLeft:20}} bsStyle="info"><CSVLink style={{color:'#fff'}} data={this.state.data} >export</CSVLink>
                </Button>

                <Modal
                    show={this.state.new_show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Insert Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>UserID</label>
                        <input type="text" name="new_UserID"
                               value={this.state.new_UserID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>ReportID</label>
                        <input type="text" name="new_ReportID"
                               value={this.state.new_ReportID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Report_Type</label>
                        <input type="text" name="new_Report_Type"
                               value={this.state.new_Report_Type} onChange={this.handleChange.bind(this)} /><br/>
                        <label>CardID</label>
                        <input type="text" name="new_CardID"
                               value={this.state.new_CardID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Credit_Amount</label>
                        <input type="text" name="new_Credit_Amount"
                               value={this.state.new_Credit_Amount} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Credit_Type</label>
                        <input type="text" name="new_Credit_Type"
                               value={this.state.new_Credit_Type} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date"
                               value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)} /><br/>
                        <label>FirstNameAC</label>
                        <input type="text" name="new_FirstNameAC"
                               value={this.state.new_FirstNameAC} onChange={this.handleChange.bind(this)} /><br/>
                        <label>LastNameAC</label>
                        <input type="text" name="new_LastNameAC"
                               value={this.state.new_LastNameAC} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Account_Number</label>
                        <input type="text" name="new_Account_Number"
                               value={this.state.new_Account_Number} onChange={this.handleChange.bind(this)} /><br/>
                        <label>IFSC</label>
                        <input type="text" name="new_IFSC"
                               value={this.state.new_IFSC} onChange={this.handleChange.bind(this)} /><br/>
                        <label>AddressLine1</label>
                        <input type="text" name="new_AddressLine1"
                               value={this.state.new_AddressLine1} onChange={this.handleChange.bind(this)} /><br/>
                        <label>AddressLine2</label>
                        <input type="text" name="new_AddressLine2"
                               value={this.state.new_AddressLine2} onChange={this.handleChange.bind(this)} /><br/>
                        <label>AddressLine3</label>
                        <input type="text" name="new_AddressLine3"
                               value={this.state.new_AddressLine3} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Pincode</label>
                        <input type="text" name="new_Pincode"
                               value={this.state.new_Pincode} onChange={this.handleChange.bind(this)} /><br/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onhandleInsertReport.bind(this)}>Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}