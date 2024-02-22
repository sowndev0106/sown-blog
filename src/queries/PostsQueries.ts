import { gql } from "@apollo/client";
export const GET_POSTS_QUERY = gql`
query getPosts($slug: String, $limit: Int)# Write your query or mutation her
 {
  posts(filters:{slug:{eq:$slug}},pagination:{limit:$limit}){
    data{
      id
      attributes{
        slug
        title
        description
        thumbnail{
          data{
            attributes{
              name
            	url
            }
          }
        }
        tags{
          data{
            attributes{
              name
              slug
            }
          }
        }
        notionId
        createdAt
        publishedAt
      }
    }
}
}
`;
