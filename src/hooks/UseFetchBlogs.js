export const UseFetchBlogs = async () => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Blogs {
          blogs {
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
    `,
    }),
    next: { revalidate: 10 },
  });

  const json = await response.json();

  return json;
}

export default UseFetchBlogs;