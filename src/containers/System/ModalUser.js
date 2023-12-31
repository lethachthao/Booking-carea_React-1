import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Breadcrumb } from 'reactstrap';

class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          address: "",
        };
    }
    componentDidMount() {
    }
    toggle= () =>{
      this.props.toggoFromParent();
    }
    handleOnChageInput = (event, id) =>{

      let copyState = {...this.state};
      copyState[id] = event.target.value;
      this.setState({
        ...copyState
      })
    }

    checkValidateInput = ()=>{
      let isValid = true;
      let arrInput = ["email", "password", "firstName", "lastName", "address"];
      for(let i = 0; i < arrInput.length; i++){
        if(!this.state[arrInput[i]]){
          isValid = false;
          alert('Missing parameter: ' + arrInput[i]);
          break;
        }
      }

      return isValid;
    }

    handleAddNewUser = () =>{
      let isValid = this.checkValidateInput();
      if(isValid === true){
        //call api create model
        this.props.createNewUser(this.state, 'abc');
      }
      
    }

    render() {
        return (
                <Modal 
                  isOpen={this.props.isOpen}
                  toggle={()=>{ this.toggle()}} 
                  className={"modal-user-container"}
                  size='lg'  
                >

                  <ModalHeader toggle={()=>{ this.toggle()}}>Create a new User</ModalHeader>
                  <ModalBody>
                    <div className='modal-user-body'>
                    <div className='input-container'>
                          <label>Email</label>
                          <input type='email' onChange={(event)=>{this.handleOnChageInput(event, "email")}} value={this.state.email}/>
                    </div>
                        <div className='input-container'>
                          <label>Password</label>
                          <input type='password' onChange={(event)=>{this.handleOnChageInput(event, "password")}} value={this.state.password}/>
                    </div>
                    <div className='input-container'>
                          <label>First Name</label>
                          <input type='text' onChange={(event)=>{this.handleOnChageInput(event, "firstName");}} value={this.state.fristName}/>
                    </div>
                    <div className='input-container'>
                          <label>Last Name</label>
                          <input type='text' onChange={(event)=>{this.handleOnChageInput(event, "lastName")}} value={this.state.lastName}/>
                    </div>
                    <div className='input-container max-w-input'>
                          <label>Address</label>
                          <input type='text' onChange={(event)=>{this.handleOnChageInput(event, "address")}} value={this.state.address}/>
                    </div>
                    </div>
                    
                        

                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" className='px-3, py-1' onClick={()=>{ this.handleAddNewUser()}}>Add New</Button>{' '}
                    <Button color="secondary" className='px-3, py-1' onClick={()=>{ this.toggle()}}>Cloes</Button>
                  </ModalFooter>
                </Modal>        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



