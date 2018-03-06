import React,{ Component } from 'react';
import { connect } from 'react-redux';

class InputText extends Component {
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    };

    render(){
        var wrapperClass = 'form-group';
        if(this.props.error && this.props.error.length >0){
            wrapperClass += ' ' + 'has-error';
        }

        return(
            <div className={wrapperClass}>
                <lable htmlFor={ this.props.name }>{ this.props.label }</lable>
                <div className="field">
                    <input type='text'
                           name={ this.props.name }
                           className="form-control"
                           placeholder={ this.props.placeholder }
                           ref={ this.props.name }
                           value={ this.props.value }
                           onChange={ this.props.onChange }
                    />
                    <div className="input">{ this.props.error }</div>
                </div>
            </div>

        )
    }
}

export default InputText;