import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Register from '../components/register/register-components/register';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';


// https://github.com/mjackson/ReactFire
//() => { this.firebaseRefs.items }
class ConnectToFirebase extends Component {
    componentWillMount () {
        try {
            let firebaseConnect = new Firebase('https://redux-test-1b77a.firebaseio.com/users/');
            this.bindAsObject(firebaseConnect, 'users');
            // Attach an asynchronous callback to read the data at our  reference
            firebaseConnect.on("value", function(snapshot){
                console.log(snapshot.val());
            }, function (errorObject) {
                errorObject = new Error('The read failed:');
                console.log(errorObject.code);
            });
        }
        catch(error){
            console.log( error)
        }
    }
    render(){
        return(
            <div>
                <Register itemStored={ this.firebaseRefs.users }/>
            </div>
        )
    }
}

reactMixin(ConnectToFirebase.prototype, ReactFireMixin);
export default ConnectToFirebase;