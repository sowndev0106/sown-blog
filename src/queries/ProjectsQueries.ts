import { gql } from "@apollo/client";

export const GET_PROJECTS_QUERY = gql`
query getAllProject {
        projects{
            data{
            id
            attributes{
                name
                tags{
                data{
                    attributes{
                    name
                    slug
                    }
                }
                }
                description
                websiteUrl
                github
                thumbnail{
                data{
                    attributes{
                    url
                    name
                    }
                }
                }
                createdAt
                updatedAt
                
            }
            }
            
        }
        }
`;
