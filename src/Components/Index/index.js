import React from 'react';
import {Link} from 'react-router-dom';

export class Index extends React.Component {
    render() {
        return(
            <div className="container-view">

                <img className="header-img imgResponsive" src="header.png" alt="passenger" /><br/>

                <Link to={'/passenger/'}><button className="login-button">LOGIN</button></Link>


                <span style={{position:'absolute',bottom:10,left:10}}>Copyright @ Muflar Technologies Private Limited 2018</span>
            </div>
        );
    }
}
