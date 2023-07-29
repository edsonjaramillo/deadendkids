import { BandMember, BlogPost, Gallery, Album, Show, Song, CTA } from '@/types/cms';
import { GQLRequest } from '@/utils/cms/GQLRequest';
import { Query } from '@/utils/cms/Query';

type AllPages = {
  blogPosts: BlogPost[];
};

// create a generic that allows me to destructure the response based on the type
type Res<T> = {
  [key: string]: T;
};

export class CMSClient {
  gql: GQLRequest;
  constructor() {
    const endpoint = process.env.CMS_ENDPOINT as string;
    this.gql = new GQLRequest(endpoint);
  }

  async getCTA() {
    const id = 'clkoi4o1y1nb20bipwng0hxic';
    const { callToAction } = await this.gql.request<Res<CTA>>(Query.getCTA(), { variables: { id } });
    return callToAction;
  }

  async getShows() {
    const { shows } = await this.gql.request<Res<Show[]>>(Query.getShows());
    return shows;
  }

  async getSingles() {
    const { songs } = await this.gql.request<Res<Song[]>>(Query.getSingles());
    return songs;
  }

  async getAlbums() {
    const { albums } = await this.gql.request<Res<Album[]>>(Query.getAlbums());
    return albums;
  }

  async getBandMembers() {
    const { bandMembers } = await this.gql.request<Res<BandMember[]>>(Query.getBandMembers());
    return bandMembers;
  }

  async getBlogPosts() {
    const { blogPosts } = await this.gql.request<Res<BlogPost[]>>(Query.getBlogPosts());
    return blogPosts;
  }

  async getRecentBlogPosts() {
    const { blogPosts } = await this.gql.request<Res<BlogPost[]>>(Query.getRecentBlogPosts());
    return blogPosts;
  }

  async getBlogPostBySlug(slug: string) {
    const { blogPost } = await this.gql.request<Res<BlogPost>>(Query.getBlogPostBySlug(), {
      variables: { slug },
    });
    return blogPost;
  }

  async getBlogPostSlugs() {
    const { blogPosts } = await this.gql.request<Res<BlogPost[]>>(Query.getBlogPostSlugs());
    return blogPosts;
  }

  async getAllPages() {
    const { blogPosts } = await this.gql.request<AllPages>(Query.getAllPages());
    return { blogPosts };
  }

  async getGalleries() {
    const { galleries } = await this.gql.request<Res<Gallery[]>>(Query.getGalleries());
    return galleries;
  }
}
