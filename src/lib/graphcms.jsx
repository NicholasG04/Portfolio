import { GraphQLClient } from 'graphql-request';

export async function getPostAndMoreBySlug(slug) {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const { post, morePosts } = await graphcms.request(`
    query getPostAndMoreBySlug {
      post(where: {slug: "${slug}"}) {
        title
        slug
        date
        content {
          markdown
        }
        excerpt
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit: crop,
                width: 1000,
                height: 500
              }
            }
          })
        }
      }
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not: "${slug}"}) {
        title
        slug
        date
        excerpt
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit: crop,
                width: 300,
                height: 150
              }
            }
          })
        }
      }
    }
  `);
  return { post, morePosts };
}

export async function getAllPosts() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const { posts } = await graphcms.request(`
    query getAllPosts {
      posts {
        title
        slug
        date
        excerpt
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit: crop,
                width: 300,
                height: 150
              }
            }
          })
        }
      }
    }
  `);

  return posts;
}

export async function getAllSlugs() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const { posts } = await graphcms.request(`
    query getAllSlugs {
      posts {
        slug
      }
    }
  `);
  return posts;
}
