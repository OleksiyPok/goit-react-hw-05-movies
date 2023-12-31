import styled from 'styled-components';

export const ComponentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* border: 2px solid darkblue; */
  border: 2px solid ${({ color }) => (color ? color : 'darkblue')};
  border-radius: 8px;
  justify-content: center;
`;
