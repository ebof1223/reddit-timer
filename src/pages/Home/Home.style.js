import styled from 'styled-components';

export const Headline = styled.h1`
  margin: 18px 0 0;
`;
export const Loader = styled.article`
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: rotate;
  animation-timing-function: linear;
  border: solid 10px #fdb755;
  border-bottom-color: transparent;
  border-radius: 50%;
  border-right-color: transparent;
  height: 100px;
  margin: 110px auto 0;
  transition: all 0.5s ease-in;
  width: 100px;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: rotate;
  -webkit-animation-timing-function: linear;
  -webkit-transition: all 0.5s ease-in;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export const Section = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 69.688em;
  width: 100%;
  overflow: hidden;
  text-align: center;
`;
