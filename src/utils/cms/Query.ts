export class Query {
  static getCTA() {
    return `
      query CallToActions($id: ID!) {
        callToAction(where: {id: $id}) {
          image {
            width
            height
            url
            altText
          }
        }
      }
    `;
  }

  static getSingles() {
    return `
      query getSinglesAblums {
        songs(where: { isSingle: true }, orderBy: releaseDate_DESC) {
          id
          title
          releaseDate
          isSingle
          url {
            spotifyUrl
            appleMusicUrl
          }
          singleCover {
            id
            width
            height
            url
            altText
          }
        }
      }
    `;
  }

  static getAlbums() {
    return `
      query getAlbums {
        albums(orderBy: releaseDate_DESC) {
          id
          title
          releaseDate
          url {
            spotifyUrl
            appleMusicUrl
          }
          albumCover {
            id
            url
            width
            height
            altText
          }
        }
      }
    `;
  }

  static getBandMembers() {
    return `
      query getBandMembers {
        bandMembers(orderBy: lastName_ASC) {
          id
          firstName
          lastName
          role
          image {
            id
            url
            width
            height
            altText
          }
        }
      }
    `;
  }

  static getBlogPosts() {
    return `
      query getBlogPosts {
        blogPosts(orderBy: releaseDate_DESC) {
          id
          title
          description
          releaseDate
          slug
          bandMember {
            id
            firstName
            lastName
            role
            image {
              id
              url
              width
              height
              altText
            }
          }
          image {
            id
            url
            width
            height
            altText
          }
          article {
            raw
          }
        }
      }
    `;
  }

  static getRecentBlogPosts() {
    return `
      query getBlogPosts {
        blogPosts(orderBy: releaseDate_DESC, first: 3) {
          id
          title
          slug
          bandMember {
            firstName
            lastName
          }
        }
      }
    `;
  }

  static getBlogPostBySlug() {
    return `
      query getBlogPostBySlug($slug: String!) {
        blogPost(where: {slug: $slug}) {
          id
          title
          slug
          description
          updatedAt
          releaseDate
          bandMember {
            firstName
            lastName
            image {
              url
              width
              height
              altText
            }
          }
          image {
            url
            width
            height
          }
          article {
            json
            text
          }
        }
      }
    `;
  }

  static getBlogPostSlugs() {
    return `
      query getBlogPostSlugs {
        blogPosts {
          title
          slug
        }
      }
    `;
  }

  static getAllPages() {
    return `
      query GetAllPages {
        blogPosts(orderBy: releaseDate_DESC) {
          slug
          updatedAt
        }
      }
    `;
  }

  static getGalleries() {
    return `
      query GetGalleries {
        galleries {
          id
          image {
            url
            width
            height
          }
        }
      }
    `;
  }

  static getShows() {
    return `
      query Shows {
        shows(orderBy: startingTime_ASC) {
          id
          title
          startingTime
          endingTime
          ticketsUrl
          moreInfoUrl
          destination {
            name
            address
            city
            state
            zipcode
            coordinates {
              latitude
              longitude
            }
          }
        }
      }
    `;
  }
}
