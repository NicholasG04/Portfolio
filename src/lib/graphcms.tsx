import { GraphQLClient } from 'graphql-request';

interface Post {
  slug: string
  title?: string
  date?: string
  excerpt?: string
  coverImage?: {
    url: string
  }
}

export async function getPostAndMoreBySlug(slug: string): Promise<{ post: Post; morePosts: Post[] }> {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const { post, morePosts }: {post: Post; morePosts: Post[]} = await graphcms.request(`
    query getPostAndMoreBySlug($slug: String!) {
      post(where: {slug: $slug}) {
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
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not: $slug}) {
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
  `, { slug });
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

export async function getAllSlugs(): Promise<Post[]> {
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

export async function getPreviewPostBySlug(slug: string) {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_DEV_AUTH_TOKEN}`,
    },
  });
  const { post, morePosts }: {post: Post; morePosts: Post[]} = await graphcms.request(`
    query getPreviewPostBySlug($slug: String!) {
      post(where: {slug: $slug}) {
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
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not: $slug}) {
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
  `, {slug});
  return { post, morePosts };
}