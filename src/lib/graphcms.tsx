import { GraphQLClient } from 'graphql-request';
import { Post, CardPost, MainPost } from './types';

export async function getPostAndMoreBySlug(slug: string, preview: boolean): Promise<{ post: MainPost; morePosts: CardPost[] }> {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${preview ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const { post, morePosts }: {post: MainPost; morePosts: CardPost[]} = await graphcms.request(`
    query getPostAndMoreBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
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
  `, { slug, stage: preview ? 'DRAFT' : 'PUBLISHED' });
  return { post, morePosts };
}

export async function getAllPosts(): Promise<CardPost[]> {
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

export async function getPreviewPostBySlug(slug: string): Promise<{slug: string}> {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_DEV_AUTH_TOKEN}`,
    },
  });
  const { post }: { post: { slug: string } } = await graphcms.request(`
    query getPreviewPostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }
  `, { slug, stage: 'DRAFT' });
  return post;
}
