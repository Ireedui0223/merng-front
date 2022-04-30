import gql from "graphql-tag";
export const loginMutation = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      #   id
      #   email
      #   userName
    }
  }
`;

export const registerMutation = gql`
  mutation register(
    $userName: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
  ) {
    register(
      userName: $userName
      password: $password
      confirmPassword: $confirmPassword
      email: $email
    ) {
      token
    }
  }
`;
