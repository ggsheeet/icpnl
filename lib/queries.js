import { gql } from "@apollo/client";

export const GET_POSTS_IG = gql`
  query GetPostsIG {
    posts(first: 15, where: { categoryName: "informacion-global", status: PUBLISH }) {
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

export const GET_POSTS_OA = gql`
  query GetPostsOA {
    posts(first: 15, where: { categoryName: "oceano-atlantico", status: PUBLISH }) {
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

export const GET_POSTS_MO = gql`
  query GetPostsMO {
    posts(first: 15, where: { categoryName: "medio-oriente", status: PUBLISH }) {
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

export const GET_POSTS_CA = gql`
  query GetPostsCA {
    posts(first: 15, where: { categoryName: "continente-asiatico", status: PUBLISH }) {
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

export const GET_POSTS_OC = gql`
  query GetPostsOC {
    posts(first: 15, where: { categoryName: "oceania", status: PUBLISH }) {
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

export const GET_POSTS_AF = gql`
  query GetPostsAF {
    posts(first: 15, where: { categoryName: "continente-africano", status: PUBLISH }) {
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

export const GET_POSTS_CE = gql`
  query GetPostsCE {
    posts(first: 15, where: { categoryName: "continente-europeo", status: PUBLISH }) {
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

export const GET_POSTS_AM = gql`
  query GetPostsAM {
    posts(first: 15, where: { categoryName: "continente-americano", status: PUBLISH }) {
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
