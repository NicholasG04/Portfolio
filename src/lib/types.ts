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

export interface CardPost {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: {
    url: string
  }
}

export interface MainPost {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: {
    url: string
  }
  content: {
    markdown: string;
  }
}
