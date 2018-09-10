import React from 'react';
import '../../../css/index.css'
import {CSVLink} from 'react-csv';
import {Table,Button} from 'react-bootstrap';
export class TopupHistory extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
        };
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
                        <th>id</th>
                        <th>UserID</th>
                        <th>CardID</th>
                        <th>BusRoute</th>
                        <th>BusID</th>
                        <th>Amount</th>
                        <th>Recharge_Date</th>
                        <th>Recharge_Time</th>
                        <th>CardReaderID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.topuphistories.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.topuphistories[index].id}</td>
                                <td>{this.props.topuphistories[index].UserID}</td>
                                <td>{this.props.topuphistories[index].CardID}</td>
                                <td>{this.props.topuphistories[index].BusRoute}</td>
                                <td>{this.props.topuphistories[index].BusID}</td>
                                <td>{this.props.topuphistories[index].Amount}</td>
                                <td>{this.props.topuphistories[index].Recharge_Date}</td>
                                <td>{this.props.topuphistories[index].Recharge_Time}</td>
                                <td>{this.props.topuphistories[index].CardReaderID}</td>
                            </tr>
                            )})}
                    </tbody>
                </Table>

                <Button bsStyle="info" onClick={() => this.setState({
                    new_show: true})}><CSVLink style={{color:'#fff'}} data={this.props.topuphistories} >export</CSVLink>
                </Button>

            </div>
        );
    }
}