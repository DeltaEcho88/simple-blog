import { useCallback } from "react";

const UseFetchBlogSearch = () => {
  
  const blogSearchList = useCallback(
    async (params) => {
      if( params.length === 0){
        return 'No Posts Found';
      }
      const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query BlogSearch($searchTerms: String!) {
              blogs(where: {title_contains: $searchTerms}) {
                id
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
        variables: { searchTerms: params },
      }),
        next: { revalidate: 10 },
      });

      const json = await response.json();
    
      return json;
    },
  []);
  return blogSearchList;
}

export default UseFetchBlogSearch;