import gql from "graphql-tag";
export const createPostMutation = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      # id
      body
      #   createdAt
      #   userName
      #   comments {
      #     id
      #     body
      #   }
      #   likeCount
      #   commentCount
    }
  }
`;
export const deletePostMutation = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;
