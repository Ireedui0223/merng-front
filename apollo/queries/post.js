import gql from "graphql-tag";
import { postModel } from "../model/post";
import { commentModel } from "../model/comment";
import { likeModel } from "../model/like";

export const postQuery = gql`
    query post ($id: ID!){
        post (id: $id){
            ${postModel}
            comment{
                ${commentModel}
            }
            like{
                ${likeModel}
            }
        }
    }
`;
export const postsQuery = gql`
    query getPosts {
        getPosts{
            
                ${postModel}
            comments{
                ${commentModel}
            }
            likes{
                ${likeModel}
            }
            
        }
    }
`;
