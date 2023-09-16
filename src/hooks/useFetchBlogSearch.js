import { useCallback } from "react";

const API = process.env.HYGRAPH_ENDPOINT;

const useFetchBlogSearch = () => {
  
  const blogSearchList = useCallback(
    async (params) => {
      console.log(params);
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query BlogSearch() {
              blogs() {
                title
                blogSummary
                author {
                  authorImage {
                    url
                  }
                  name
                }
                categories {
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
        `,
        variables: {params}
        }),
        next: { revalidate: 10 },
      });
      console.log( response );

      const json = await response.json();
    
      return json;
    },
  []);
  return blogSearchList;
}

export default useFetchBlogSearch;