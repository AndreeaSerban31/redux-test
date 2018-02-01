import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { activeGame } from '../../actions/index';
import GameDetail from './game_detail';

class GamesCatChildrenGrid extends Component {
    renderGameDetail(){
        return ( null
            //game description
        )
    }

    render(){
            if(this.props.test2){
                return (
                    <div className="GameGrid">
                        <div>
                            <h3>
                                <span>
                                    { this.props.test2.localizedName }
                                </span>
                                <span className="GamesNo">
                                    { this.props.test2.children.length }
                                </span>
                            </h3>

                            { this.props.test2.children.map(
                                (item) => {
                                    return (
                                        <div className="GameThumbnail"
                                             onClick= { () => {  this.props.activeGame(item)  }}
                                             onMouseOver ={ () => { }}
                                        >
                                            <div /*target='_blank' href ={ item.game.url }*/ >
                                                <img className="GameImage"
                                                     width="200"
                                                     height="200"
                                                     src = { item.game.thumbnail }
                                                />
                                                <span className="GameName">{ item.game.name }</span>
                                            </div>
                                            < GameDetail />
                                        </div>

                                    )
                                })
                            }
                            { this.renderGameDetail() }
                        </div>
                    </div>
                )
            }
            return (
                //if initial state is null render all games
                <div className="GameGrid All">
                    <div className="GameGrid">
                        <div>
                            <h3>
                                <span>
                                    { this.props.categories[this.props.categories.length-1].localizedName }
                                </span>
                                <span className="GamesNo">
                                    { this.props.categories[this.props.categories.length-1].children.length }
                                </span>
                            </h3>
                            { this.props.categories[this.props.categories.length-1].children.map(
                                (item) => {
                                    return (
                                        <div className="GameThumbnail"
                                             onClick= { () => { this.props.activeGame(item) }}
                                             onMouseOver ={ () => { }}
                                        >
                                            <div /*target='_blank' href = { item.game.url }*/ >
                                                <img className="GameImage"
                                                     width="200"
                                                     height="200"
                                                     src={ item.game.thumbnail }
                                                />
                                                <span
                                                    className="GameName">{  item.game.name  }
                                                </span>
                                            </div>
                                            < GameDetail />
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            )
    }
}

function mapStateToProps(state){
    return {
        test2: state.activeCat,
        categories: state.categories
    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators(
        { activeGame: activeGame }, dispatch
    )
}

export default connect( mapStateToProps, mapDispatchToProp )( GamesCatChildrenGrid );