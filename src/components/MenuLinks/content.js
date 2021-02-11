import { graphql } from 'gatsby';

export const query = graphql`
  query Menu {
  
      allStrapiMenu{
        edges{
          node{
            customLink{
              linkName
              url
            }
          }
        }
      }
    
  }
`;
