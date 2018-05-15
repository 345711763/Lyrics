import React,{Component} from "react";
import mutation from "../queries/likeLyric";
import {graphql} from "react-apollo";
class LyricList extends Component{
    onLikeHandler(id,likes){
        this.props.mutate({
            variables:{id},
            optimisticResponse:{
                __type:"Mutation",
                likeLyric:{
                    id:id,
                    __typename:'LyricType',
                    likes:likes+1
                }
            }
        });
    }
    renderLyrics(){
        return this.props.songLyrics.map(lyric =>{
            return <li key={lyric.id} className="collection-item">
                {lyric.content}
                <div className="vote-box">
                    <i className="material-icons" onClick ={()=>this.onLikeHandler(lyric.id,lyric.likes)}>thumb_up</i>
                    {lyric.likes}
                </div>
            </li>
        });
    }
    render(){
        return (
            <ul className ="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}


export default graphql(mutation)(LyricList);