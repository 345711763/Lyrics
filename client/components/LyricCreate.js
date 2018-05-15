import React,{Component} from "react";
import mutation from "../queries/addLyrics";
import {graphql} from "react-apollo";
class LyricCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:""
        };
    }
    changeContentHandler(event){
        this.setState({
            content:event.target.value
        });
    }
    submitHandler(event){
        event.preventDefault();
        this.props.mutate({
            variables:{
                content:this.state.content,
                id:this.props.songId
            }
        }).then(()=>{
            this.setState({
                content:""
            })
        });
    }
    render(){
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                <label>Add Lyrics</label>
                <input value={this.state.content} onChange={this.changeContentHandler.bind(this)}/>
            </form>
        );
    }
}


export default graphql(mutation)(LyricCreate);
