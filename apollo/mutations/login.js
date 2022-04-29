import gql from "apollo-server";
export const loginMutation = gql`
    mutations login(
        $userName: String !
        $password: String !
    ){
        login(userName: $userName, password: $password)
    }
`;
