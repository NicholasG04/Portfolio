export interface Post {
  slug: string
  title?: string
  date?: string
  excerpt?: string
  coverImage?: {
    url: string
  }
  content?: {
    markdown: string;
  }
}
