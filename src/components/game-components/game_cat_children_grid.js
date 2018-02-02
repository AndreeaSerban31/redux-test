import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { activeGame } from '../../actions/index';
import GameDetail from './game_detail';

class GamesCatChildrenGrid extends Component {

    constructor(props){
        super(props);

    }

    renderAllCatTitle( ){
        return(
            <h3 className="GameCatTitle">
                <span>
                    { this.props.categories[this.props.categories.length-1].localizedName }
                </span>
                <span className="GamesNo">
                    { this.props.categories[this.props.categories.length-1].children.length }
                </span>
            </h3>
        )
    }
    renderCatTitle(){
        return(
            <h3>
                <span>
                    { this.props.test2.localizedName }
                </span>
                <span className="GamesNo">
                    { this.props.test2.children.length }
                </span>
            </h3>
        )
    }

    handleClick(){
       return this
    }

    showGameHoverState(){
        console.log( this.handleClick().props.activeGame(this) );
        if(this.handleClick === 'fd' ){
            return (
                <div className="test"> djf </div>
            );
        }
        return (
            <div className="test"> djf </div>
        )

    }
    randerAllGameThumbnails(){
        return (
            <div>
                {
                this.props.categories[this.props.categories.length - 1].children.map((item, index) => {
                    return (
                        <div calssName="GameWrapper" >
                            <div className="GameThumbnail"
                                 key={ index }
                                 onClick={ () => { this.props.activeGame(item); this.handleClick() }}
                            >
                                <div >
                                    <img className="GameImage"
                                         width="200"
                                         height="200"
                                         src={ item.game.thumbnail }
                                    />
                                <span
                                    className="GameName">
                                    { item.game.name }
                                </span>
                                </div>
                            </div>
                            <div>{ this.showGameHoverState(item) }</div>
                        </div>
                    )
                })
                }

           </div>
        )
    }
    randerCatGameThumbnails(){
        return (
            this.props.test2.children.map((item) => {
                switch( item.type ) {
                    //casino games
                    case 'game' :
                        return (
                            <div className="GameThumbnail"
                                 key={ item.id }
                                 onClick={ () => {  this.props.activeGame(item) }}
                                 onMouseOver={ () => { }}
                            >
                                <div >
                                    <img className="GameImage"
                                         width="200"
                                         height="200"
                                         src={ item.game.thumbnail }
                                    />
                                    <span className="GameName">{ item.game.name }</span>
                                </div>
                            </div>
                        );
                    //live casino games
                    case 'table' :
                        return (
                            <div className="GameThumbnail"
                                 key={ item.id }
                                 onClick={ () => {  this.props.activeGame(item) }}
                                 onMouseOver={ () => { }}
                            >
                                <div >
                                    <img className="GameImage"
                                         width="200"
                                         height="200"
                                         src={ item.table.thumbnail }
                                    />
                                    <span className="GameName">{ item.table.name }</span>
                                </div>
                            </div>
                        );
                }
            })
        )
    }

    render(){
            if(this.props.test2){
                return (
                    <div className="GameGrid">
                        <div>
                            { this.renderCatTitle() }
                            { this.randerCatGameThumbnails() }
                        </div>
                    </div>
                )
            }
            return (
                <div className="GameGrid All">
                        <div>
                            { this.renderAllCatTitle() }
                            { this.randerAllGameThumbnails() }
                        </div>
                </div>
            )
    }
}

function mapStateToProps(state){
    return {
        test2: state.activeCat,
        categories: state.categories,
    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators(
        { activeGame: activeGame }, dispatch
    )
}

export default connect( mapStateToProps, mapDispatchToProp )( GamesCatChildrenGrid );