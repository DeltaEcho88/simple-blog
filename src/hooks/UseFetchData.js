export const UseFetchData = async () => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query FetchHomepage {
        hotNews: blogs(first: 4) {
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
            categoryColor {
              hex
            }
          }
          featuredImage {
            url
            width
            height
          }
          createdAt
        }
        blogs: blogs(skip: 4) {
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
            categoryColor {
              hex
            }
          }
          featuredImage {
            url
            width
            height
          }
          createdAt
        }
        sidebar: categories {
          id
          title
          categoryColor {
            hex
          }
        }
        advertisement:banners {
          id
          bannerImage {
            url
            width
            height
          }
          bannerText
        }
      }
    `,
  }),
    next: { revalidate: 10 },
  });

  const json = await response.json();

  return json;
}

export default UseFetchData;