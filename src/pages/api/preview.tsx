import { NextApiRequest, NextApiResponse } from 'next';
import { getPreviewPostBySlug } from '../../lib/graphcms';

interface request extends NextApiRequest {
  query: {
    secret: string
    slug: string
  }
}

export default async function preview(req: request, res: NextApiResponse): Promise<void> {
  if (req.query.secret !== process.env.GRAPHCMS_PREVIEW_SECRET || !req.query.slug) return res.status(401).json({ message: 'Invalid Token' });
  const post = await getPreviewPostBySlug(req.query.slug);
  if (!post) return res.status(401).json({ message: 'Invalid slug' });

  res.setPreviewData({});

  res.writeHead(307, { Location: `/blog/${post.slug}` }).end();
}
