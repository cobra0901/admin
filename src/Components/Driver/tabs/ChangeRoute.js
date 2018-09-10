import React from 'react';
import {CSVLink} from 'react-csv';
import {Table,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import '../../../css/index.css'
import {SERVER_URL} from '../../../Constant/config'
import update from "react-addons-update";

export class ChangeRoute extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            new_show: false,
            update_show: false,
            del_show: false,
            data: [],

            new_UserID:'',
            new_ReportID:'',
            new_Report_Type:'',
            new_Bus_ID:'',
            new_BusRoute:'',
            new_New_Route:'',
            new_TransferBusID:'',
            new_Report_Date:'',
            new_Status:'',
            new_New_UserID:'',
        };
    }

    handleHide() {
        this.setState({del_show: false,update_show:false,new_show:false});
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    componentDidUpdate(prevProps) {

        if (this.props.changeRoutes.length > 0 && this.props.changeRoutes !== prevProps.changeRoutes) {

            let newState = update(this.state, {
                data: {
                    $set: this.props.changeRoutes
                }
            });
            this.setState(newState);
        }
    }

    onInsertStop(){

        const InserData =  {

            "UserID": this.state.new_UserID,
            "ReportID": this.state.new_ReportID,
            "Report_Type": this.state.new_Report_Type,
            "Bus_ID": this.state.new_Bus_ID,
            "BusRoute": this.state.new_BusRoute,
            "New_Route": this.state.new_New_Route,
            "TransferBusID": this.state.new_TransferBusID,
            "Report_Date": this.state.new_Report_Date,
            "Status": this.state.new_Status,
            "New_UserID": this.state.new_New_UserID,
        };

        console.log("new_BusID",this.state.new_Status);

        axios({
            method: 'post',
            url: `${SERVER_URL}reportchangeroute`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);

                  //  window.location.reload();
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
                        <th>BusID</th>
                        <th>New_Route</th>
                        <th>TransferBusID</th>
                        <th>Report_Date</th>
                        <th>Status</th>
                        <th>New_UserID</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.state.data[index].UserID}</td>
                                <td>{this.state.data[index].ReportID}</td>
                                <td>{this.state.data[index].Report_Type}</td>
                                <td>{this.state.data[index].Bus_ID}</td>
                                <td>{this.state.data[index].New_Route}</td>
                                <td>{this.state.data[index].TransferBusID}</td>
                                <td>{this.state.data[index].Report_Date}</td>
                                <td>{this.state.data[index].Status}</td>
                                <td>{this.state.data[index].New_UserID}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>
                <Button bsStyle="info" style={{marginLeft:30}} onClick={()=>this.setState({new_show:true})}>New</Button>
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
                            New Change Route
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
                        <label>Bus_ID</label>
                        <input type="text" name="new_Bus_ID" value={this.state.new_Bus_ID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_Route</label>
                        <input type="text" name="new_New_Route" value={this.state.new_New_Route} onChange={this.handleChange.bind(this)}/><br/>
                        <label>TransferBusID</label>
                        <input type="text" name="new_TransferBusID" value={this.state.new_TransferBusID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date" value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="new_Status" value={this.state.new_Status} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_UserID</label>
                        <input type="text" name="new_New_UserID" value={this.state.new_New_UserID} onChange={this.handleChange.bind(this)}/><br/>
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