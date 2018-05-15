import gql from "graphql-tag";


const mutation = gql`
    mutation AddLyrics($id:ID,$content:String){
      addLyricToSong(songId:$id,content:$content){
        id
        lyrics{
            id
            content
            likes
        }
    
  }
}
`;

export default mutation;