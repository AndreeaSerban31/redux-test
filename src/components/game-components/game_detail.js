import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameDetail extends Component {
    render() {
        if ( this.props.activeGame ) {
            return (
                <div className="GameThumbnailDetail">
                    <img className="GameThumbnailDetailImg"
                         width= '50'
                         height='50'
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
        return (null)
    }
}
function mapStateToProp(state){
    return{
        activeGame: state.activeGame
    }

}
export default connect(mapStateToProp)(GameDetail);
