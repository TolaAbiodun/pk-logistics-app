import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  transition: all 0.2s;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 10px;
  background: #333;
  animation: animateThumbnail 0.5s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.h5`
  color: #fff;
  padding: 5px;
`;

export const Content = styled.p`
  line-height: 1.2px;
  color: #fff;
  padding: 5px;
  font-size: 13px;
`;
