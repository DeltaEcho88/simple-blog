import { gql, request } from "graphql-request";
import { useQuery } from '@tanstack/react-query'

const graphqlAPI = process.env.HYGRAPH_ENDPOINT;

export const UseFetchBlogs = () => {
  // const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: `
  //       query Blogs {
  //         blogs {
  //           title
  //           blogSummary
  //           author {
  //             authorImage {
  //               url
  //             }
  //             name
  //           }
  //           categories {
  //             id
  //             title
  //           }
  //           featuredImage {
  //             url
  //             width
  //             height
  //           }
  //           createdAt
  //         }
  //       }
  //   `,
  //   }),
  //   next: { revalidate: 10 },
  // });

  const query = gql`
  query Blogs {
    blogs {
      title
      blogSummary
      author {
        authorImage {
          url
        }
        name
      }
      categories {
        id
        title
      }
      featuredImage {
        url
        width
        height
      }
      createdAt
    }
  }  
  `;

  return query;
}

export default UseFetchBlogs;