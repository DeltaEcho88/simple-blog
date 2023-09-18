export const UseFetchCategories = async () => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query Categories {
        categories {
          id
          title
        }
      }
    `,
    }),
    next: { revalidate: 10 },
  });

  const json = await response.json();

  return json;
}

export default UseFetchCategories;