import { gql } from "@apollo/client";

export const GET_POSTS_FIR = gql`
  query GetPostsFIR {
    posts(last: 1, where: { categoryName: "fiscal", status: PUBLISH }) {
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

export const GET_POSTS_FIS = gql`
  query GetPostsFIS {
    posts(first: 15, where: { categoryName: "fiscal", status: PUBLISH }) {
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

export const GET_POSTS_LAB = gql`
  query GetPostsLAB {
    posts(first: 15, where: { categoryName: "laboral", status: PUBLISH }) {
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
    posts(
      first: 15
      where: { categoryName: "comercio-exterior", status: PUBLISH }
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

export const GET_POSTS_NA = gql`
  query GetPostsNA {
    posts(
      first: 15
      where: { categoryName: "nacional", status: PUBLISH }
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

export const GET_POSTS_EM = gql`
  query GetPostsEM {
    posts(first: 15, where: { categoryName: "empresas", status: PUBLISH }) {
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

export const GET_POSTS_FIN = gql`
  query GetPostsFIN {
    posts(
      first: 15
      where: { categoryName: "finanzas", status: PUBLISH }
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

export const GET_POSTS_RSE = gql`
  query GetPostsRSE {
    posts(
      first: 15
      where: { categoryName: "rse", status: PUBLISH }
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

export const GET_LOC = gql`
  query LOC {
    mediaItem(id: "7", idType: DATABASE_ID) {
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

export const GET_MAG = gql`
  query MAG {
    mediaItem(id: "15", idType: DATABASE_ID) {
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

export const GET_ACC = gql`
  query ACC {
    mediaItem(id: "15", idType: DATABASE_ID) {
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

export const GET_DIN = gql`
  query DIN {
    mediaItem(id: "121", idType: DATABASE_ID) {
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

export const GET_C_FIR = gql`
  query C_FIR {
    mediaItem(id: "845", idType: DATABASE_ID) {
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

export const GET_C_SEC = gql`
  query C_SEC {
    mediaItem(id: "848", idType: DATABASE_ID) {
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

export const GET_C_THI = gql`
  query C_THI {
    mediaItem(id: "846", idType: DATABASE_ID) {
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

export const GET_C_FOU = gql`
  query C_FOU {
    mediaItem(id: "27", idType: DATABASE_ID) {
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

export const GET_C_FIV = gql`
  query C_FIV {
    mediaItem(id: "1475", idType: DATABASE_ID) {
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

export const GET_C_SIX = gql`
  query C_SIX {
    mediaItem(id: "849", idType: DATABASE_ID) {
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

export const GET_C_SEV = gql`
  query C_SEV {
    mediaItem(id: "1476", idType: DATABASE_ID) {
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

export const GET_C_EIG = gql`
  query C_EIG {
    mediaItem(id: "1477", idType: DATABASE_ID) {
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

export const GET_C_NIN = gql`
  query C_EIG {
    mediaItem(id: "847", idType: DATABASE_ID) {
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

export const GET_PRESS = gql`
  query PRESS {
    mediaItem(id: "5", idType: DATABASE_ID) {
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

export const GET_SAT = gql`
  query SAT {
    mediaItem(id: "6", idType: DATABASE_ID) {
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

export const GET_POD = gql`
  query POD {
    mediaItem(id: "14", idType: DATABASE_ID) {
      altText
      mediaDetails {
        width
        height
      }
      sourceUrl
    }
  }
`;
