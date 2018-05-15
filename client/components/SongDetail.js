import React,{Component} from "react";
import query from "../queries/findSong";
import {graphql} from "react-apollo";
import {Link} from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
class SongDetail extends Component {
    render(){
        if(this.props.data.loading === true){
            return <div>Loading</div>
        }
        console.log(this.props.data.song);
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{this.props.data.song.title}</h3>
                <LyricList songLyrics={this.props.data.song.lyrics}/>
                <LyricCreate songId={this.props.data.song.id}/>
            </div>
        );
    }
}

export default graphql(query,{
    options:(props)=>{
        return {
            variables:{id: props.params.id}
        }
    }
})(SongDetail);