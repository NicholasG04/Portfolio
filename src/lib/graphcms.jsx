import { GraphQLClient } from 'graphql-request';

export async function getPostBySlug(slug) {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const { post } = await graphcms.request(`
    query getPostBySlug {
      post(where: {slug: "${slug}"}) {
        title
        author {
          name
        }
        date
        content {
          markdown
        }
        coverImage {
          url
        }
      }
    }
  `);
  console.log(post);
  return post;
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
