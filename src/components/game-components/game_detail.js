import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameDetail extends Component {
    constructor(props){
        super(props);
        this.state = { closeItem: null };
    }

    handleClose(){
        this.setState(
            { closeItem: this.props.activeGame }
        );
    }

    renderCloseButton(){
        return(
            <button className="CloseButton" onClick= {() => this.handleClose()}>&times;</button>
        )
    }
    renderGameDetail(){
        return(
            <div className="GameThumbnailDetail">
                <img className="GameThumbnailDetailImg"
                     width= '100'
                     height='100'
                     src = { this.props.activeGame.game.thumbnail }
                />
                <h3 className="GameThumbnailDetailName">
                    { this.props.activeGame.game.name }
                </h3>
                <div className="GameThumbnailDetailDescription">
                    <p> Small description: </p>
                    <p className="GameThumbnailDetailDescription">
                        { this.props.activeGame.game.description }
                    </p>
                </div>
            </div>
        )
    }

    render() {
        if ( this.props.activeGame && this.state.closeItem === null ) {
               return(
                       <div className="GameDetailWrapper">
                            { this.renderCloseButton() }
                            { this.renderGameDetail() }
                       </div>
                    )
                }
        return null;
    }
}
function mapStateToProp(state){
    return{
        activeGame: state.activeGame
    }

}
export default connect(mapStateToProp)(GameDetail);
