import gql from "graphql-tag";

import { userModel } from "../model/user";

export const userQuery = gql`
    query  {
        currentUser{
            ${userModel}
        }
    }
`;
