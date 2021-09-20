import styled from 'styled-components';

export const Container = styled.article`
  border: 1px solid rgb(221, 221, 221);
  margin-bottom: 2rem;
`;
export const Title = styled.h1`
  text-align: left;
  font-size: 1.5em;
`;

export const Table = styled.div``;

export const Post = styled.div`
  color: black;
  border-right: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  font-size: 0.875em;
  padding: 0.625em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  :nth-child(1) {
    grid-column: 1/4;
    text-align: left;
  }
  a {
    text-decoration: none;
  }
`;

export const Label = styled(Post)`
  font-weight: 600;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const PostRow = styled(HeaderRow)``;
