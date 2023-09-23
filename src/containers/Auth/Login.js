import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
// import { handleLoginApi } from '../../services/userService';
import {handleLoginApi} from '../../services/userService.js'

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebook, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: '',
            isShowpassword: false,
            errMessage:''
        }
    }

    handleOnchangeUsername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handleOnchangePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () =>{
        this.setState({
            errMessage: ''
        }) 
        try{
           let data = await handleLoginApi(this.state.username, this.state.password)
            if(data && data.errCode !==0){
                this.setState({
                    errMessage: data.message
                }) 
            }
            if(data && data.errCode === 0){
                this.props.userLoginSuccess(data.user)
                console.log('login secceeds')
            }
        }catch(error){
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage:error.response.data.message
                    })
                }
            }
            console.log('lethachthao', error.response)
        }
    }

    handleShowHidePassword= () =>{
        this.setState({
            isShowpassword : !this.state.isShowpassword
        })

    }

    render() {
        return (


            <div className='login-background'>
              <div className='login-container'>
                <div className='login-content row'>
                    <div className='col-12 text-login '>Login</div>
                    <div className='col-12 form-group login-input'>
                        <label>UserName</label>
                        <input
                         type='text'
                         className='form-control' 
                         value={this.state.username} 
                         onChange={(event)=> this.handleOnchangeUsername(event)}
                         ></input>
                    </div>
                    <div className='col-12 form-group login-input'>
                        <label>Password</label>
                        <div  className='costom-input-password'>
                        <input 
                        type={this.state.isShowpassword ? 'text' : 'password' }
                        className='form-control'
                        onChange={(event)=> this.handleOnchangePassword(event)}
                        ></input>
                        <span
                            onClick={(event) =>{this.handleShowHidePassword()}}
                        >
                        <FontAwesomeIcon icon={faEye} className='i' />
                        </span>
                        </div>     
                    </div>
                    <div className='col-12' style={{color:'red'}}>
                        {this.state.errMessage}

                    </div>
                    <div className='col-12 '>
                    <button className='btn-login' onClick={() =>{this.handleLogin()}}>Login</button>
                    </div>
                    <div className='col-12'>
                        <span className='forgot-password'>Forgot your password?</span>
                    </div>
                    <div className='col-12 text-center'>
                        <span className='text-other-login'>Or login with</span>
                    </div>
                    <div className='col-12 cocial-login'>
                    <FontAwesomeIcon icon={faGooglePlusG} className="fa-icon cocial-icon faGooglePlusG" />
                    <FontAwesomeIcon icon={faFacebook} className="fa-icon cocial-icon faFacebook" />
                    <FontAwesomeIcon icon={faTwitter} className="fa-icon cocial-icon faTwitter " />

                    </div>
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
