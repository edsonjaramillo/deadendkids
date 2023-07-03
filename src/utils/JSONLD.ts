import {
  BlogPosting,
  MusicAlbum as MusicAlbumLD,
  MusicEvent as MusicEventLD,
  MusicGroup as MusicGroupLD,
  WithContext,
} from 'schema-dts';

import { Album, BlogPost, Show } from '@/types/cms';

export class JSONLD {
  static getMusicGroup(): WithContext<MusicGroupLD> {
    const jsonld: WithContext<MusicGroupLD> = {
      '@context': 'https://schema.org',
      '@type': 'MusicGroup',
      name: 'Artist Name',
      genre: 'Genre',
      image: 'https://example.com/artist-image.jpg',
      sameAs: ['https://www.facebook.com/artist', 'https://www.instagram.com/artist', 'https://www.youtube.com/artist'],
    };
    return jsonld;
  }

  static getAlbum(album: Album): WithContext<MusicAlbumLD> {
    const jsonld: WithContext<MusicAlbumLD> = {
      '@context': 'https://schema.org',
      '@type': 'MusicAlbum',
      name: album.title,
      byArtist: this.getMusicGroup(),
      track: album.songs.map((song) => ({
        '@type': 'MusicRecording',
        name: song.title,
        position: song.trackNumber,
      })),
      url: [album.url.appleMusicUrl, album.url.spotifyUrl],
      albumReleaseType: 'AlbumRelease',
    };
    return jsonld;
  }

  static getMusicEvent(musicShow: Show): WithContext<MusicEventLD> {
    const jsonld: WithContext<MusicEventLD> = {
      '@context': 'https://schema.org',
      '@type': 'MusicEvent',
      name: musicShow.title,
      startDate: musicShow.startingTime,
      endDate: musicShow.endingTime,
      location: {
        '@type': 'Place',
        name: musicShow.destination.name,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: musicShow.destination.coordinates.latitude,
          longitude: musicShow.destination.coordinates.longitude,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: musicShow.destination.address,
          addressLocality: musicShow.destination.city,
          postalCode: musicShow.destination.zipcode,
          addressRegion: musicShow.destination.state,
          addressCountry: 'Country',
        },
      },
      image: 'https://example.com/event-image.jpg',
      eventStatus: 'EventScheduled',
    };

    return jsonld;
  }

  static getBlogPost(blog: BlogPost): WithContext<BlogPosting> {
    const authorName = `${blog.bandMember.firstName} ${blog.bandMember.lastName}`;

    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      url: `https://deadendkidsmusic.com/blog/${blog.slug}`,
      datePublished: blog.releaseDate,
      dateModified: blog.updatedAt,
      headline: blog.title,
      description: blog.description,
      author: { '@type': 'Person', name: authorName },
      articleBody: blog.article.text,
      wordCount: blog.article.text.split(' ').length,
    };
  }
}
