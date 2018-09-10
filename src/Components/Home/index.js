import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/index.css';
import './index.css';
export class Home extends React.Component {
    render() {
        return(
            <div className="container-view">

                <img className="header-img imgResponsive" src="header.png" alt="passenger" /><br/>
                <Link to={'/passenger'}><button className="wel-button">Passenger</button></Link>
                <Link to={'/driver'}><button className="wel-button">Driver</button></Link>
                <Link to={'/library'}><button className="wel-button">Library</button></Link>


                <span style={{position:'absolute',bottom:10,left:10}}>Copyright @ Muflar Technologies Private Limited 2018</span>
            </div>
        );
    }
}
