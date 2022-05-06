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
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      userName: $userName
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
    }
  }
`;
