import React,{ Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

export default function( ComposedComponent ) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };
        componentWillMount(){
            this.props.authCreator;
            console.log( this.props );
            if(!this.props.auth){
                this.context.router.push('/')
            }
        }
        render(){
            console.log(this.context);
            return <ComposedComponent { ...this.props } />
        }
    }

    function mapStateToProps(state){
        return { authCreator: state }
    }

    return connect(mapStateToProps)(Authentication);
}