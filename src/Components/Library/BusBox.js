import React from 'react';
import {BusContent} from "./BusContent";
import {SERVER_URL} from "../../Constant/config";
import './index.css';
import axios from 'axios';

export class BusBox extends React.Component {

    constructor(){
        super();
        this.state={
            stops:[],
            routes:[]
        }
    }

    componentDidMount(){

        axios.get(SERVER_URL + `routefare/`)
            .then(res => {
                const routes = res.data;
                this.setState({ routes });
            });

        axios.get(SERVER_URL + `busstops/`)
            .then(res => {
                const stops = res.data;
                this.setState({ stops });
            });
    }

    render() {
        return(

            <div className="input-view1">
                <BusContent
                    stops={this.state.stops}
                    routes={this.state.routes}
                />
            </div>
        );
    }
}
