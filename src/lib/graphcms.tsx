import { GraphQLClient, gql } from 'graphql-request';
import { Post, CardPost, MainPost } from './types';

export async function getPostAndMoreBySlug(slug: string, preview: boolean): Promise<{ post: MainPost; morePosts: CardPost[] }> {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${preview || process.env.NODE_ENV === 'development' ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const query = gql`
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
                fit: scale,
                height: 500
              }
            }
          })
          width
          height
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
                fit: clip,
                width: 300,
                height: 150
              }
            }
          })
        }
      }
    }
  `;
  const variables = { slug, stage: preview || process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED' };
  const { post, morePosts }: {post: MainPost; morePosts: CardPost[]} = await graphcms.request(query, variables);
  return { post, morePosts };
}

export async function getAllPosts(): Promise<CardPost[]> {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.NODE_ENV === 'development' ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const query = gql`
    query getAllPosts {
      posts(orderBy: date_DESC) {
        title
        slug
        date
        excerpt
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit: clip,
                width: 300,
                height: 150
              }
            }
          })
        }
      }
    }
  `;
  const { posts }: { posts: CardPost[] } = await graphcms.request(query);

  return posts;
}

export async function getAllSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.NODE_ENV === 'development' ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  });
  const query = gql`
    query getAllSlugs {
      posts {
        slug
      }
    }
    `;
  const { posts }: { posts: Pick<Post, 'slug'>[] } = await graphcms.request(query);
  return posts;
}

export async function getPreviewPostBySlug(slug: string): Promise<Pick<Post, 'slug'>> {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_DEV_AUTH_TOKEN}`,
    },
  });
  const query = gql`
    query getPreviewPostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }
  `;
  const { post }: { post: Pick<Post, 'slug'> } = await graphcms.request(query, { slug, stage: 'DRAFT' });
  return post;
}
