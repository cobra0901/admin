import React from 'react';
import {CSVLink} from 'react-csv';
import {Table,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import API from '../../../Constant/api'
import {SERVER_URL} from '../../../Constant/config'
import update from 'react-addons-update';

export class Stops extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            del_show: false,
            update_show: false,
            Stops:'',
            BusRoute:'',
            Lat:'',
            Longtitude:'',
            id:'',
            GPS_Location_1:'',
            GPS_Location_2:'',
            Poly_Cord_lat1:'',
            Poly_Cord_lat2:'',
            Poly_Cord_lat3:'',
            Poly_Cord_lat4:'',
            Poly_Cord_lat5:'',
            Poly_Cord_lat6:'',
            Poly_Cord_lat7:'',
            Poly_Cord_lat8:'',
            Poly_Cord_lat9:'',
            Poly_Cord_lat10:'',
            Poly_Cord_long1:'',
            Poly_Cord_long2:'',
            Poly_Cord_long3:'',
            Poly_Cord_long4:'',
            Poly_Cord_long5:'',
            Poly_Cord_long6:'',
            Poly_Cord_long7:'',
            Poly_Cord_long8:'',
            Poly_Cord_long9:'',
            Poly_Cord_long10:'',
            new_BusRoute:'',
            new_Stops:'',
            new_Lat:'',
            new_Longtitude:'',
            new_GPS_Location_1:'',
            new_GPS_Location_2:'',
            new_Poly_Cord_lat1:'',
            new_Poly_Cord_lat2:'',
            new_Poly_Cord_lat3:'',
            new_Poly_Cord_lat4:'',
            new_Poly_Cord_lat5:'',
            new_Poly_Cord_lat6:'',
            new_Poly_Cord_lat7:'',
            new_Poly_Cord_lat8:'',
            new_Poly_Cord_lat9:'',
            new_Poly_Cord_lat10:'',
            new_Poly_Cord_long1:'',
            new_Poly_Cord_long2:'',
            new_Poly_Cord_long3:'',
            new_Poly_Cord_long4:'',
            new_Poly_Cord_long5:'',
            new_Poly_Cord_long6:'',
            new_Poly_Cord_long7:'',
            new_Poly_Cord_long8:'',
            new_Poly_Cord_long9:'',
            new_Poly_Cord_long10:'',
            data: [],
            selectKey:-1,
        };
    }

    handleHide() {
        this.setState({ show: false });
    }

    handleHideDel() {
        this.setState({ del_show: false });
    }

    handleHideUpdate() {
        this.setState({ update_show: false });
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    componentDidUpdate(prevProps) {

        if (this.props.stops.length > 0 && this.props.stops !== prevProps.stops) {

            let newState = update(this.state, {
                data: {
                    $set: this.props.stops
                }
            });
            this.setState(newState);
        }
    }

    onInsertStop(){
        const InserData =  {
                "BusRoute": this.state.new_BusRoute,
                "Stops": this.state.new_Stops,
                "Lat": this.state.new_Lat,
                "Longtitude": this.state.new_Longtitude,
                "GPS_Location_1": this.state.new_GPS_Location_1,
                "GPS_Location_2": this.state.new_GPS_Location_2,
                "Poly_Cord_lat1": this.state.new_Poly_Cord_lat1,
                "Poly_Cord_long1": this.state.new_Poly_Cord_long1,
                "Poly_Cord_lat2": this.state.new_Poly_Cord_lat2,
                "Poly_Cord_long2": this.state.new_Poly_Cord_long2,
                "Poly_Cord_lat3": this.state.new_Poly_Cord_lat3,
                "Poly_Cord_long3": this.state.new_Poly_Cord_long3,
                "Poly_Cord_lat4": this.state.new_Poly_Cord_lat4,
                "Poly_Cord_long4": this.state.new_Poly_Cord_long4,
                "Poly_Cord_lat5": this.state.new_Poly_Cord_lat5,
                "Poly_Cord_long5": this.state.new_Poly_Cord_long5,
                "Poly_Cord_lat6": this.state.new_Poly_Cord_lat6,
                "Poly_Cord_long6": this.state.new_Poly_Cord_long6,
                "Poly_Cord_lat7": this.state.new_Poly_Cord_lat7,
                "Poly_Cord_long7": this.state.new_Poly_Cord_long7,
                "Poly_Cord_lat8": this.state.new_Poly_Cord_lat8,
                "Poly_Cord_long8": this.state.new_Poly_Cord_long8,
                "Poly_Cord_lat9": this.state.new_Poly_Cord_lat9,
                "Poly_Cord_long9": this.state.new_Poly_Cord_long9,
                "Poly_Cord_lat10": this.state.new_Poly_Cord_lat10,
                "Poly_Cord_long10": this.state.new_Poly_Cord_long10
            };

        axios({
            method: 'post',
            url: `${SERVER_URL}busstops`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    //console.log(response.data);
                }
            })
            .catch(function (response) {
                //console.log(response);
            });

        let newState = update(this.state, {
            data: {
                $push: [InserData]
            }
        });
        this.setState(newState);
        this.setState({show:false});
    }

    onUpdateStop(){
        const InserData =  {
            "id": this.state.id,
            "Stops": this.state.Stops,
            "BusRoute": this.state.BusRoute,
            "Lat": this.state.Lat,
            "Longtitude": this.state.Longtitude,
            "GPS_Location_1": this.state.GPS_Location_1,
            "GPS_Location_2": this.state.GPS_Location_2,
            "Poly_Cord_lat1": this.state.Poly_Cord_lat1,
            "Poly_Cord_long1": this.state.Poly_Cord_long1,
            "Poly_Cord_lat2": this.state.Poly_Cord_lat2,
            "Poly_Cord_long2": this.state.Poly_Cord_long2,
            "Poly_Cord_lat3": this.state.Poly_Cord_lat3,
            "Poly_Cord_long3": this.state.Poly_Cord_long3,
            "Poly_Cord_lat4": this.state.Poly_Cord_lat4,
            "Poly_Cord_long4": this.state.Poly_Cord_long4,
            "Poly_Cord_lat5": this.state.Poly_Cord_lat5,
            "Poly_Cord_long5": this.state.Poly_Cord_long5,
            "Poly_Cord_lat6": this.state.Poly_Cord_lat6,
            "Poly_Cord_long6": this.state.Poly_Cord_long6,
            "Poly_Cord_lat7": this.state.Poly_Cord_lat7,
            "Poly_Cord_long7": this.state.Poly_Cord_long7,
            "Poly_Cord_lat8": this.state.Poly_Cord_lat8,
            "Poly_Cord_long8": this.state.Poly_Cord_long8,
            "Poly_Cord_lat9": this.state.Poly_Cord_lat9,
            "Poly_Cord_long9": this.state.Poly_Cord_long9,
            "Poly_Cord_lat10": this.state.Poly_Cord_lat10,
            "Poly_Cord_long10": this.state.Poly_Cord_long10
        };

        console.log("BusRoute",this.state.BusRoute);

        axios({
            method: 'put',
            url: `${SERVER_URL}busstops/${this.state.id}`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    console.log(response.data);
                }
            })
            .catch(function (response) {
                console.log(response);
                return
            });

        this.setState({
            data: update(
                this.state.data,
                {
                    [this.state.selectKey]: {
                        BusRoute: { $set: this.state.BusRoute },
                        Stops: { $set: this.state.Stops },
                        Lat: { $set: this.state.Lat },
                        Longtitude: { $set: this.state.Longtitude },
                        GPS_Location_1: { $set: this.state.GPS_Location_1 },
                        GPS_Location_2: { $set: this.state.GPS_Location_2 },
                        Poly_Cord_lat1: { $set: this.state.Poly_Cord_lat1 },
                        Poly_Cord_lat2: { $set: this.state.Poly_Cord_lat2 },
                        Poly_Cord_lat3: { $set: this.state.Poly_Cord_lat3 },
                        Poly_Cord_lat4: { $set: this.state.Poly_Cord_lat4 },
                        Poly_Cord_lat5: { $set: this.state.Poly_Cord_lat5 },
                        Poly_Cord_lat6: { $set: this.state.Poly_Cord_lat6 },
                        Poly_Cord_lat7: { $set: this.state.Poly_Cord_lat7 },
                        Poly_Cord_lat8: { $set: this.state.Poly_Cord_lat8 },
                        Poly_Cord_lat9: { $set: this.state.Poly_Cord_lat9 },
                        Poly_Cord_lat10: { $set: this.state.Poly_Cord_lat10 },
                        Poly_Cord_long1: { $set: this.state.Poly_Cord_long1 },
                        Poly_Cord_long2: { $set: this.state.Poly_Cord_long2 },
                        Poly_Cord_long3: { $set: this.state.Poly_Cord_long3 },
                        Poly_Cord_long4: { $set: this.state.Poly_Cord_long4 },
                        Poly_Cord_long5: { $set: this.state.Poly_Cord_long5 },
                        Poly_Cord_long6: { $set: this.state.Poly_Cord_long6 },
                        Poly_Cord_long7: { $set: this.state.Poly_Cord_long7 },
                        Poly_Cord_long8: { $set: this.state.Poly_Cord_long8 },
                        Poly_Cord_long9: { $set: this.state.Poly_Cord_long9 },
                        Poly_Cord_long10: { $set: this.state.Poly_Cord_long10 },
                    }
                }
            )
        });

        this.setState({new_show:false});
        this.setState({update_show:false})

    }

    onDeleteStops(){
        console.log("Stops",this.state.Stops);

        API.delete(`busstops/${this.state.Stops}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        this.setState({
            data: update(
                this.state.data,
                {
                    $splice: [[this.state.selectKey, 1]]
                }
            ),
            selectKey: -1,
            del_show:false
        });    }

    render() {
        return(
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>Stops</th>
                        <th>BusRoute</th>
                        <th>Lat</th>
                        <th>Longtitude</th>
                        <th>GPS_Location_1</th>
                        <th>GPS_Location_2</th>
                        <th>Poly_Cord_lat1</th>
                        <th>Poly_Cord_long1</th>
                        <th>Poly_Cord_lat2</th>
                        <th>Poly_Cord_long2</th>
                        <th>Poly_Cord_lat3</th>
                        <th>Poly_Cord_long3</th>
                        <th>Poly_Cord_lat4</th>
                        <th>Poly_Cord_long4</th>
                        <th>Poly_Cord_lat5</th>
                        <th>Poly_Cord_long5</th>
                        <th>Poly_Cord_lat6</th>
                        <th>Poly_Cord_long6</th>
                        <th>Poly_Cord_lat7</th>
                        <th>Poly_Cord_long7</th>
                        <th>Poly_Cord_lat8</th>
                        <th>Poly_Cord_long8</th>
                        <th>Poly_Cord_lat9</th>
                        <th>Poly_Cord_long9</th>
                        <th>Poly_Cord_lat10</th>
                        <th>Poly_Cord_long10</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.data.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.state.data[index].Stops}</td>
                                <td>{this.state.data[index].BusRoute}</td>
                                <td>{this.state.data[index].Lat}</td>
                                <td>{this.state.data[index].Longtitude}</td>
                                <td>{this.state.data[index].GPS_Location_1}</td>
                                <td>{this.state.data[index].GPS_Location_2}</td>
                                <td>{this.state.data[index].Poly_Cord_lat1}</td>
                                <td>{this.state.data[index].Poly_Cord_long1}</td>
                                <td>{this.state.data[index].Poly_Cord_lat2}</td>
                                <td>{this.state.data[index].Poly_Cord_long2}</td>
                                <td>{this.state.data[index].Poly_Cord_lat3}</td>
                                <td>{this.state.data[index].Poly_Cord_long3}</td>
                                <td>{this.state.data[index].Poly_Cord_lat4}</td>
                                <td>{this.state.data[index].Poly_Cord_long4}</td>
                                <td>{this.state.data[index].Poly_Cord_lat5}</td>
                                <td>{this.state.data[index].Poly_Cord_long5}</td>
                                <td>{this.state.data[index].Poly_Cord_lat6}</td>
                                <td>{this.state.data[index].Poly_Cord_long6}</td>
                                <td>{this.state.data[index].Poly_Cord_lat7}</td>
                                <td>{this.state.data[index].Poly_Cord_long7}</td>
                                <td>{this.state.data[index].Poly_Cord_lat8}</td>
                                <td>{this.state.data[index].Poly_Cord_long8}</td>
                                <td>{this.state.data[index].Poly_Cord_lat9}</td>
                                <td>{this.state.data[index].Poly_Cord_long9}</td>
                                <td>{this.state.data[index].Poly_Cord_lat10}</td>
                                <td>{this.state.data[index].Poly_Cord_long10}</td>
                                <td><Button bsStyle="success" style={{width:50}} onClick={() => this.setState({
                                    update_show: true,
                                    selectKey:index,
                                    id:this.state.data[index].id,
                                    BusRoute:this.state.data[index].BusRoute,
                                    Stops:this.state.data[index].Stops,
                                    Lat:this.state.data[index].Lat,
                                    Longtitude:this.state.data[index].Longtitude,
                                    GPS_Location_1:this.state.data[index].GPS_Location_1,
                                    GPS_Location_2:this.state.data[index].GPS_Location_2,
                                    Poly_Cord_lat1:this.state.data[index].Poly_Cord_lat1,
                                    Poly_Cord_lat2:this.state.data[index].Poly_Cord_lat2,
                                    Poly_Cord_lat3:this.state.data[index].Poly_Cord_lat3,
                                    Poly_Cord_lat4:this.state.data[index].Poly_Cord_lat4,
                                    Poly_Cord_lat5:this.state.data[index].Poly_Cord_lat5,
                                    Poly_Cord_lat6:this.state.data[index].Poly_Cord_lat6,
                                    Poly_Cord_lat7:this.state.data[index].Poly_Cord_lat7,
                                    Poly_Cord_lat8:this.state.data[index].Poly_Cord_lat8,
                                    Poly_Cord_lat9:this.state.data[index].Poly_Cord_lat9,
                                    Poly_Cord_lat10:this.state.data[index].Poly_Cord_lat10,
                                    Poly_Cord_long1:this.state.data[index].Poly_Cord_long1,
                                    Poly_Cord_long2:this.state.data[index].Poly_Cord_long2,
                                    Poly_Cord_long3:this.state.data[index].Poly_Cord_long3,
                                    Poly_Cord_long4:this.state.data[index].Poly_Cord_long4,
                                    Poly_Cord_long5:this.state.data[index].Poly_Cord_long5,
                                    Poly_Cord_long6:this.state.data[index].Poly_Cord_long6,
                                    Poly_Cord_long7:this.state.data[index].Poly_Cord_long7,
                                    Poly_Cord_long8:this.state.data[index].Poly_Cord_long8,
                                    Poly_Cord_long9:this.state.data[index].Poly_Cord_long9,
                                    Poly_Cord_long10:this.state.data[index].Poly_Cord_long10,
                                })}>edit</Button></td>
                                <td><Button bsStyle="danger" style={{width:60}} onClick={()=>{this.setState({
                                    Stops:this.state.data[index].Stops,
                                    selectKey:index,
                                    del_show:true})}}>delete</Button></td>
                            </tr>
                        )})}

                    </tbody>
                </Table>

                <Button bsStyle="info" onClick={()=>this.setState({show:true})} style={{marginLeft:30}}>New</Button>
                <Button style={{marginLeft:20}} bsStyle="info" ><CSVLink style={{color:'#fff'}} data={this.state.data} >export</CSVLink>
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide.bind(this)}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Insert Bus Stop
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Stops</label>
                        <input type="text" name="new_Stops"
                               value={this.state.new_Stops} onChange={this.handleChange.bind(this)} /><br/>
                        <label>BusRoute</label>
                        <input type="text" name="new_BusRoute"
                               value={this.state.new_BusRoute} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Lat</label>
                        <input type="text" name="new_Lat" value={this.state.new_Lat} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Longtitude</label>
                        <input type="text" name="new_Longtitude" value={this.state.new_Longtitude} onChange={this.handleChange.bind(this)}/><br/>

                        <label>GPS_Location_1</label>
                        <input type="text" name="new_GPS_Location_1" value={this.state.new_GPS_Location_1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>GPS_Location_2</label>
                        <input type="text" name="new_GPS_Location_2" value={this.state.new_GPS_Location_2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat1</label>
                        <input type="text" name="new_Poly_Cord_lat1" value={this.state.new_Poly_Cord_lat1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long1</label>
                        <input type="text" name="new_Poly_Cord_long1" value={this.state.new_Poly_Cord_long1} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat2</label>
                        <input type="text" name="new_Poly_Cord_lat2" value={this.state.new_Poly_Cord_lat2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long2</label>
                        <input type="text" name="new_Poly_Cord_long2" value={this.state.new_Poly_Cord_long2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat3</label>
                        <input type="text" name="new_Poly_Cord_lat3" value={this.state.new_Poly_Cord_lat3} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long3</label>
                        <input type="text" name="new_Poly_Cord_long3" value={this.state.new_Poly_Cord_long3} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat4</label>
                        <input type="text" name="new_Poly_Cord_lat4" value={this.state.new_Poly_Cord_lat4} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long4</label>
                        <input type="text" name="new_Poly_Cord_long4" value={this.state.new_Poly_Cord_long4} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat5</label>
                        <input type="text" name="new_Poly_Cord_lat5" value={this.state.new_Poly_Cord_lat5} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long5</label>
                        <input type="text" name="new_Poly_Cord_long5" value={this.state.new_Poly_Cord_long5} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat6</label>
                        <input type="text" name="new_Poly_Cord_lat6" value={this.state.new_Poly_Cord_lat6} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long6</label>
                        <input type="text" name="new_Poly_Cord_long6" value={this.state.new_Poly_Cord_long6} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat7</label>
                        <input type="text" name="new_Poly_Cord_lat7" value={this.state.new_Poly_Cord_lat7} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long7</label>
                        <input type="text" name="new_Poly_Cord_long7" value={this.state.new_Poly_Cord_long7} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat8</label>
                        <input type="text" name="new_Poly_Cord_lat8" value={this.state.new_Poly_Cord_lat8} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long8</label>
                        <input type="text" name="new_Poly_Cord_long8" value={this.state.new_Poly_Cord_long8} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat9</label>
                        <input type="text" name="new_Poly_Cord_lat9" value={this.state.new_Poly_Cord_lat9} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long9</label>
                        <input type="text" name="new_Poly_Cord_long9" value={this.state.new_Poly_Cord_long9} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat10</label>
                        <input type="text" name="new_Poly_Cord_lat10" value={this.state.new_Poly_Cord_lat10} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long10</label>
                        <input type="text" name="new_Poly_Cord_long10" value={this.state.new_Poly_Cord_long10} onChange={this.handleChange.bind(this)}/><br/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onInsertStop.bind(this)}>Save</Button>
                        <Button onClick={this.handleHide.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.update_show}
                    onHide={this.handleHideUpdate.bind(this)}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Update Bus Stop
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Stops</label>
                        <input type="text" name="Stops"
                               value={this.state.Stops} onChange={this.handleChange.bind(this)} /><br/>
                        <label>BusRoute</label>
                        <input type="text" name="BusRoute"
                               value={this.state.BusRoute} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Lat</label>
                        <input type="text" name="Lat" value={this.state.Lat} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Longtitude</label>
                        <input type="text" name="Longtitude" value={this.state.Longtitude} onChange={this.handleChange.bind(this)}/><br/>

                        <label>GPS_Location_1</label>
                        <input type="text" name="GPS_Location_1" value={this.state.GPS_Location_1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>GPS_Location_2</label>
                        <input type="text" name="GPS_Location_2" value={this.state.GPS_Location_2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat1</label>
                        <input type="text" name="Poly_Cord_lat1" value={this.state.Poly_Cord_lat1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long1</label>
                        <input type="text" name="Poly_Cord_long1" value={this.state.Poly_Cord_long1} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat2</label>
                        <input type="text" name="Poly_Cord_lat2" value={this.state.Poly_Cord_lat2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long2</label>
                        <input type="text" name="Poly_Cord_long2" value={this.state.Poly_Cord_long2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat3</label>
                        <input type="text" name="Poly_Cord_lat3" value={this.state.Poly_Cord_lat3} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long3</label>
                        <input type="text" name="Poly_Cord_long3" value={this.state.Poly_Cord_long3} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat4</label>
                        <input type="text" name="Poly_Cord_lat4" value={this.state.Poly_Cord_lat4} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long4</label>
                        <input type="text" name="Poly_Cord_long4" value={this.state.Poly_Cord_long4} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat5</label>
                        <input type="text" name="Poly_Cord_lat5" value={this.state.Poly_Cord_lat5} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long5</label>
                        <input type="text" name="Poly_Cord_long5" value={this.state.Poly_Cord_long5} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat6</label>
                        <input type="text" name="Poly_Cord_lat6" value={this.state.Poly_Cord_lat6} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long6</label>
                        <input type="text" name="Poly_Cord_long6" value={this.state.Poly_Cord_long6} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat7</label>
                        <input type="text" name="Poly_Cord_lat7" value={this.state.Poly_Cord_lat7} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long7</label>
                        <input type="text" name="Poly_Cord_long7" value={this.state.Poly_Cord_long7} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat8</label>
                        <input type="text" name="Poly_Cord_lat8" value={this.state.Poly_Cord_lat8} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long8</label>
                        <input type="text" name="Poly_Cord_long8" value={this.state.Poly_Cord_long8} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat9</label>
                        <input type="text" name="Poly_Cord_lat9" value={this.state.Poly_Cord_lat9} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long9</label>
                        <input type="text" name="Poly_Cord_long9" value={this.state.Poly_Cord_long9} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat10</label>
                        <input type="text" name="Poly_Cord_lat10" value={this.state.Poly_Cord_lat10} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long10</label>
                        <input type="text" name="Poly_Cord_long10" value={this.state.Poly_Cord_long10} onChange={this.handleChange.bind(this)}/><br/>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onUpdateStop.bind(this)}>Save</Button>
                        <Button onClick={this.handleHideUpdate.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.del_show}
                    onHide={this.handleHideDel.bind(this)}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Delete Bus Route Fare
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you really remove this data?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onDeleteStops.bind(this)}>Save</Button>
                        <Button onClick={this.handleHideDel.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}