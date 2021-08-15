import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $authors: [String]!, $description: String!, $title: String!, $bookId: Int!, $image: String!, $link: String!) {
    saveBook(userId: $userId, authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
      _id
      username
      books
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(book: $book) {
      _id
      username
      books
    }
  }
`;