import React from 'react';
import {CSVLink} from 'react-csv';
import {Table,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import '../../../css/index.css'
import {SERVER_URL} from '../../../Constant/config'
import update from "react-addons-update";

export class ChangeDevice extends React.Component {

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
            new_Old_CardReaderID1:'',
            new_Old_CardReaderID2:'',
            new_Old_ControllerID:'',
            new_Old_AdPanelID:'',
            new_New_CardReaderID1:'',
            new_New_CardReaderID2:'',
            new_New_ControllerID:'',
            new_New_AdPanelID:'',
            new_Report_Date:'',
            new_Status:'',
        };
    }

    componentDidUpdate(prevProps) {

        if (this.props.changeDevices.length > 0 && this.props.changeDevices !== prevProps.changeDevices) {

            let newState = update(this.state, {
                data: {
                    $set: this.props.changeDevices
                }
            });
            this.setState(newState);
        }
    }

    handleHide() {
        this.setState({del_show: false,update_show:false,new_show:false});
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    onInsertStop(){

        const InserData =  {

            "UserID": this.state.new_UserID,
            "ReportID": this.state.new_ReportID,
            "Report_Type": this.state.new_Report_Type,
            "Bus_ID": this.state.new_Bus_ID,
            "BusRoute": this.state.new_BusRoute,
            "Old_CardReaderID1": this.state.new_Old_CardReaderID1,
            "Old_CardReaderID2": this.state.new_Old_CardReaderID2,
            "Old_ControllerID": this.state.new_Old_ControllerID,
            "Old_AdPanelID": this.state.new_Old_AdPanelID,
            "New_CardReaderID1": this.state.new_New_CardReaderID1,
            "New_CardReaderID2": this.state.new_New_CardReaderID2,
            "New_ControllerID": this.state.new_New_ControllerID,
            "New_AdPanelID": this.state.new_New_AdPanelID,
            "Report_Date": this.state.new_Report_Date,
            "Status": this.state.new_Status,
        };

        console.log("new_BusID",this.state.new_Status);

        axios({
            method: 'post',
            url: `${SERVER_URL}reportchangedevice`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);

                   // window.location.reload();
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
                        <th>Bus_ID</th>
                        <th>BusRoute</th>
                        <th>Old_CardReaderID1</th>
                        <th>Old_CardReaderID2</th>
                        <th>Old_ControllerID</th>
                        <th>Old_AdPanelID</th>
                        <th>New_CardReaderID1</th>
                        <th>New_CardReaderID2</th>
                        <th>New_ControllerID</th>
                        <th>New_AdPanelID</th>
                        <th>Report_Date</th>
                        <th>Status</th>
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
                                <td>{this.state.data[index].BusRoute}</td>
                                <td>{this.state.data[index].Old_CardReaderID1}</td>
                                <td>{this.state.data[index].Old_CardReaderID2}</td>
                                <td>{this.state.data[index].Old_ControllerID}</td>
                                <td>{this.state.data[index].Old_AdPanelID}</td>
                                <td>{this.state.data[index].New_CardReaderID1}</td>
                                <td>{this.state.data[index].New_CardReaderID2}</td>
                                <td>{this.state.data[index].New_ControllerID}</td>
                                <td>{this.state.data[index].Report_Date}</td>
                                <td>{this.state.data[index].New_AdPanelID}</td>
                                <td>{this.state.data[index].Status}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>
                <Button bsStyle="info" style={{marginLeft:30}} onClick={()=>this.setState({new_show:true})}>New</Button>
                <Button style={{marginLeft:20}} bsStyle="info" ><CSVLink style={{color:'#fff'}} data={this.props.changeDevices} >export</CSVLink>
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
                        <label>Bus_ID</label>
                        <input type="text" name="new_Bus_ID" value={this.state.new_Bus_ID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>BusRoute</label>
                        <input type="text" name="new_BusRoute" value={this.state.new_BusRoute} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_CardReaderID1</label>
                        <input type="text" name="new_Old_CardReaderID1" value={this.state.new_Old_CardReaderID1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_CardReaderID2</label>
                        <input type="text" name="new_Old_CardReaderID2" value={this.state.new_Old_CardReaderID2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_ControllerID</label>
                        <input type="text" name="new_Old_ControllerID" value={this.state.new_Old_ControllerID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_AdPanelID</label>
                        <input type="text" name="new_Old_AdPanelID" value={this.state.new_Old_AdPanelID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_CardReaderID1</label>
                        <input type="text" name="new_New_CardReaderID1" value={this.state.new_New_CardReaderID1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_CardReaderID2</label>
                        <input type="text" name="new_New_CardReaderID2" value={this.state.new_New_CardReaderID2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_ControllerID</label>
                        <input type="text" name="new_New_ControllerID" value={this.state.new_New_ControllerID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_AdPanelID</label>
                        <input type="text" name="new_New_AdPanelID" value={this.state.new_New_AdPanelID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date" value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="new_Status" value={this.state.new_Status} onChange={this.handleChange.bind(this)}/><br/>
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