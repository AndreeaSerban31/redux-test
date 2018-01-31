import React,{ Component } from 'react';
import { connect } from 'react-redux';

class GamesCatChildrenGrid extends Component {
    render(){
            if(this.props.test2){
                return (
                    <div className="GameGrid">
                        <div>
                            <h3>{ this.props.test2.localizedName }</h3>
                            { this.props.test2.children.map(
                                (item) => {
                                    return (
                                        <div className="GameThumbnail">
                                            <a target='_blank' href ={ item.game.url } >
                                                <img className="GameImage"
                                                     width="200"
                                                     height="200"
                                                     src = { item.game.backgroundImage }
                                                />
                                                <span className="GameName">{ item.game.name }</span>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            return (
                //if initial state is null render all games
                <div className="GameGrid Error">
                    <div className="GameGrid">
                        <div>
                            { console.log( this.props.categories )}
                            <h3>{ this.props.categories[this.props.categories.length-1].localizedName }</h3>
                            { this.props.categories[this.props.categories.length-1].children.map(
                                (item) => {
                                    return (
                                        <div className="GameThumbnail">
                                            <a target='_blank' href = { item.game.url } >
                                                <img className="GameImage"
                                                     width="200"
                                                     height="200"
                                                     src={ item.game.backgroundImage }
                                                />
                                                <span
                                                    className="GameName">{  item.game.name  }
                                                </span>
                                            </a>
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
export default connect( mapStateToProps )( GamesCatChildrenGrid );