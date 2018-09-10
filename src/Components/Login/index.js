import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/index.css';
import './index.css';
export class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            id:'',
            pwd:'',
            current:'',
            data:'login'
        }
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    onHandleLogin(){
        if(this.state.id === 'dev' && this.state.pwd === 'hello'){
            this.setState({current:'home',data:'Home'});
        }else {
            alert('Invalid User');
        }
    }

    render() {
        return(
            <div className="container-view">

                <img className="header-img imgResponsive" src="header.png" alt="passenger" /><br/>
                <input name="id" value={this.state.id} onChange={this.handleChange.bind(this)} className="input-login-view" placeholder="Employee ID"/><br/>
                <input name="pwd" value={this.state.pwd} onChange={this.handleChange.bind(this)} className="input-login-view" placeholder="Password"/><br/>
                <span style={{fontSize:11,float:'right',marginRight:10,cursor:'pointer'}}>Forget password?</span><br/>
                <Link to={this.state.current}><button onClick={this.onHandleLogin.bind(this)} className="login-button">{this.state.data}</button></Link>

                <span style={{position:'absolute',bottom:10,left:10}}>Copyright @ Muflar Technologies Private Limited 2018</span>
            </div>
        );
    }
}
