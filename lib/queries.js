import { gql } from "@apollo/client";

export const GET_POSTS_BP = gql`
  query GetPostsBP {
    posts(first: 15, where: { categoryName: "bp", status: PUBLISH }) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS_GAS = gql`
  query GetPostsGAS {
    posts(first: 15, where: { categoryName: "gas", status: PUBLISH }) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS_EM = gql`
  query GetPostsEM {
    posts(
      first: 15
      where: { categoryName: "empresas-del-sector", status: PUBLISH }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS_AL = gql`
  query GetPostsAL {
    posts(
      first: 15
      where: { categoryName: "aceites-y-lubricantes", status: PUBLISH }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS_RE = gql`
  query GetPostsRE {
    posts(first: 15, where: { categoryName: "renovables", status: PUBLISH }) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS_RES = gql`
  query GetPostsRES {
    posts(
      first: 15
      where: { categoryName: "responsabilidad", status: PUBLISH }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS_IN = gql`
  query GetPostsIN {
    posts(
      first: 15
      where: { categoryName: "internacionales", status: PUBLISH }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

// export const GET_POSTS_AM = gql`
//   query GetPostsAM {
//     posts(first: 15, where: { categoryName: "continente-americano", status: PUBLISH }) {
//       nodes {
//         id
//         title
//         content
//         date
//         slug
//         tags {
//           nodes {
//             name
//           }
//         }
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `;

// export const GET_POSTS_MX = gql`
//   query GetPostsMX {
//     posts(first: 15, where: { categoryName: "mexico", status: PUBLISH }) {
//       nodes {
//         id
//         title
//         content
//         date
//         slug
//         tags {
//           nodes {
//             name
//           }
//         }
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($categorySlug: String!) {
    posts(first: 15, where: { categoryName: $categorySlug, status: PUBLISH }) {
      nodes {
        id
        title
        content
        date
        slug
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS_BY_ID = gql`
  query GetPostsById($articleSlug: String!) {
    postBy(uri: $articleSlug) {
      id
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_CATEGORY_BY_ID = gql`
  query GetArticlesByCategory($categoryId: ID!) {
    posts(first: 15, where: { categoryId: $categoryId }) {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_PPN = gql`
  query PPN {
    mediaItem(id: "154", idType: DATABASE_ID) {
      altText
      caption
      mediaDetails {
        width
        height
      }
      sourceUrl
    }
  }
`;

export const GET_PPI = gql`
  query PPI {
    mediaItem(id: "153", idType: DATABASE_ID) {
      altText
      caption
      mediaDetails {
        width
        height
      }
      sourceUrl
    }
  }
`;

export const GET_ECOM = gql`
  query ECOM {
    mediaItem(id: "164", idType: DATABASE_ID) {
      altText
      caption
      mediaDetails {
        width
        height
      }
      sourceUrl
    }
  }
`;

export const GET_GLOB = gql`
  query GLOB {
    mediaItem(id: "163", idType: DATABASE_ID) {
      altText
      caption
      mediaDetails {
        width
        height
      }
      sourceUrl
    }
  }
`;

export const GET_ENER = gql`
  query GLOB {
    mediaItem(id: "162", idType: DATABASE_ID) {
      altText
      caption
      mediaDetails {
        width
        height
      }
      sourceUrl
    }
  }
`;