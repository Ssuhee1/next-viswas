import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CSSJS = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Title>This is styled component example</Title>
    </>
  );
};

export default CSSJS;
