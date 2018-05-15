import gql from "graphql-tag";

const mutation = gql`mutation LikeLyrics($id:ID){
  likeLyric(id:$id){
    id
    likes
  }
}`;

export default mutation;