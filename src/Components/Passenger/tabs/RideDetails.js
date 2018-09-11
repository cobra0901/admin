import React from 'react';
import '../../../css/index.css'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import DayPicker, { DateUtils } from 'react-day-picker';
import './style.css';

import {CSVLink} from 'react-csv';
import {Table,Button} from 'react-bootstrap';

export class RideDetails extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);

        this.state = {
            show: false,
            startDate:'',
            EndDate:'',
            date_show:true,
            selectedDays: []
        };
    }

    handleDayClick(day, { selected }) {
        const { selectedDays } = this.state;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.setState({ selectedDays });
    }

    stylechange(){
            this.setState({date_show:!this.state.date_show})
    }

    handleHide() {
        this.setState({ show: false });
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }


    render() {
        return (
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>CardID</th>
                        <th>BusRoute</th>
                        <th>BusID</th>
                        <th>Entry</th>
                        <th>Exit</th>
                        <th>FareCharged</th>
                        <th>Travel_Date</th>
                        <th>Entry_Time</th>
                        <th>Exit_Time</th>
                        <th>Entry_CardReaderID</th>
                        <th>Exit_CardReaderID</th>
                        <th>Fare_Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.ridehistories.map((element, index) => {
                        const i = this.props.ridehistories[index].Travel_Date;
                         //console.log(i.toLocaleDateString());
                        return(

                            <tr key={index}>
                                <td>{this.props.ridehistories[index].CardID}</td>
                                <td>{this.props.ridehistories[index].BusRoute}</td>
                                <td>{this.props.ridehistories[index].BusID}</td>
                                <td>{this.props.ridehistories[index].Entry}</td>
                                <td>{this.props.ridehistories[index].Exit}</td>
                                <td>{this.props.ridehistories[index].FareCharged}</td>
                                <td>{i}</td>
                                <td>{this.props.ridehistories[index].Entry_Time}</td>
                                <td>{this.props.ridehistories[index].Exit_Time}</td>
                                <td>{this.props.ridehistories[index].Entry_CardReaderID}</td>
                                <td>{this.props.ridehistories[index].Exit_CardReaderID}</td>
                                <td>{this.props.ridehistories[index].Fare_Type}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>

                <Button bsStyle="info" onClick={() => this.setState({
                    new_show: true})}><CSVLink style={{color:'#fff'}} data={this.props.ridehistories} >export</CSVLink>
                </Button>

                <Button style={{width:100,marginLeft:10}} bsStyle="info" onClick={this.stylechange.bind(this)}>Select date
                </Button>

                <br/><br/>

                <div hidden={this.state.date_show}>
                    <label style={{width:250}}>Start Date:</label>
                    {/*<input style={{textAlign:'center'}} type="text" placeholder="07-Sep-18" name="startDate" value={this.state.startDate} onChange={this.handleChange.bind(this)} /><br/>*/}
                    <DayPickerInput
                        style={{textAlign:'center'}}
                        dayPickerProps={{
                            month: new Date(2018, 10),
                            showWeekNumbers: true,
                            todayButton: 'Today',
                        }}
                    /><br/>
                    <label style={{width:250,marginTop:10,marginBottom:10}}>&nbsp;&nbsp;&nbsp;</label><span style={{marginLeft:70,marginTop:10,marginBottom:10}}>TO</span><br/>
                    <label style={{width:250}}>End Date:</label>
                    {/*<input style={{textAlign:'center'}} type="text" placeholder="07-Sep-18" name="EndDate" value={this.state.EndDate} onChange={this.handleChange.bind(this)} />*/}
                    <DayPickerInput
                        style={{textAlign:'center'}}
                        dayPickerProps={{
                            month: new Date(2018, 10),
                            showWeekNumbers: true,
                            todayButton: 'Today',
                        }}
                    />
                    <br/>
                    <label style={{width:250,marginTop:10,marginBottom:10}}>&nbsp;&nbsp;&nbsp;</label><span style={{marginTop:10,marginBottom:10}}>OR</span><br/>

                    <label style={{width:250}}>Select Dates(1 or more):</label>
                    <input style={{width:600,textAlign:'center'}} type="text" placeholder="07-Sep-17,07-Mar-18,01-Jul-18,27-Sep-18" name="SelectDate" value={this.state.selectedDays} onChange={this.handleChange.bind(this)} disabled/>


                    <DayPicker
                        selectedDays={this.state.selectedDays}
                        onDayClick={this.handleDayClick}
                    />

                    <br/>
                </div>
            </div>
        );
    }
}