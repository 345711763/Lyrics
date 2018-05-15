import '../style/style.css';
import React,{Component} from "react";
import {graphql} from "react-apollo";
import {Link} from "react-router";
import query from "../queries/fetchSongs";
import mutation from "../queries/deleteSong";
class Songlist extends Component {
    onSongDelete(id) {
        this.props.mutate(
            {
                variables:{id:id},
                refetchQueries:[{query:query}]
            }
        );
    }
        renderSongs()
        {
            return this.props.data.songs.map(song => {
                return (
                    <li key={song.id} className="collection-item material-icon">
                        <Link to={`/songs/${song.id}`}>
                            {song.title}
                        </Link>
                        <i onClick={() => this.onSongDelete(song.id)} className="material-icons">
                            delete
                        </i>
                    </li>
                );
            });
        }
        render()
        {
            if (this.props.data.loading) {
                return <div>Loading...</div>;
            }
            return (
                <div>
                    <ul className="collection">
                        {this.renderSongs()}
                    </ul>
                    <Link to="/songs/new" className="btn-floating btn-large red right">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            )
        }
    }

export default graphql(mutation)(graphql(query)(Songlist));