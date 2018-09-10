import React from 'react';
import {CSVLink} from 'react-csv';
import {Table,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import '../../../css/index.css'
import {SERVER_URL} from '../../../Constant/config'
import update from "react-addons-update";

export class Service extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            new_show: false,
            update_show: false,
            del_show: false,
            new_UserID:'',
            new_ReportID:'',
            new_Report_Type:'',
            new_Issue:'',
            new_DeviceID:'',
            new_Device:'',
            new_Report_Date:'',
            new_Status:'',
            new_ServicedBY:'',
            new_BusID:'',
            data: [],

        };
    }

    componentDidUpdate(prevProps) {

        if (this.props.services.length > 0 && this.props.services !== prevProps.services) {

            let newState = update(this.state, {
                data: {
                    $set: this.props.services
                }
            });
            this.setState(newState);

            console.log("Data", this.state.data);

        }
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleHide() {
        this.setState({del_show: false,update_show:false,new_show:false});
    }

    onInsertStop(){

        const InserData =  {

            "UserID": this.state.new_UserID,
            "ReportID": this.state.new_ReportID,
            "Report_Type": this.state.new_Report_Type,
            "Issue": this.state.new_Issue,
            "DeviceID": this.state.new_DeviceID,
            "Device": this.state.new_Device,
            "Report_Date": this.state.new_Report_Date,
            "Status": this.state.new_Status,
            "ServicedBY": this.state.new_ServicedBY,
            "BusID": this.state.new_BusID,
        };

        console.log("new_BusID",this.state.new_BusID);

        axios({
            method: 'post',
            url: `${SERVER_URL}reportservice`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
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
                        <th>Issue</th>
                        <th>Device ID</th>
                        <th>Device</th>
                        <th>Report_Date</th>
                        <th>Status</th>
                        <th>Serviced BY</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.state.data[index].UserID}</td>
                                <td>{this.state.data[index].ReportID}</td>
                                <td>{this.state.data[index].Report_Type}</td>
                                <td>{this.state.data[index].Issue}</td>
                                <td>{this.state.data[index].DeviceID}</td>
                                <td>{this.state.data[index].Device}</td>
                                <td>{this.state.data[index].Report_Date}</td>
                                <td>{this.state.data[index].Status}</td>
                                <td>{this.state.data[index].ServicedBY}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>

                <Button bsStyle="info" style={{marginLeft:30}} onClick={()=>this.setState({new_show:true})}>New</Button>
                <Button bsStyle="info" style={{marginLeft:20}}><CSVLink style={{color:'#fff'}} data={this.state.data} >export</CSVLink>
                </Button>
                <Modal
                    show={this.state.new_show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            New Service
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>UserID</label>
                        <input type="text" name="new_UserID"
                               value={this.state.new_UserID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>ReportID</label>
                        <input type="text" name="new_ReportID" value={this.state.new_ReportID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Type</label>
                        <input type="text" name="new_Report_Type" value={this.state.new_Report_Type} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Issue</label>
                        <input type="text" name="new_Issue" value={this.state.new_Issue} onChange={this.handleChange.bind(this)}/><br/>
                        <label>DeviceID</label>
                        <input type="text" name="new_DeviceID" value={this.state.new_DeviceID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Device</label>
                        <input type="text" name="new_Device" value={this.state.new_Device} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date" value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="new_Status" value={this.state.new_Status} onChange={this.handleChange.bind(this)}/><br/>
                        <label>ServicedBY</label>
                        <input type="text" name="new_ServicedBY" value={this.state.new_ServicedBY} onChange={this.handleChange.bind(this)}/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onInsertStop.bind(this)}>Save</Button>
                        <Button onClick={()=>{this.setState({new_show:false})}}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}