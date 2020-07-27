import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  outline: none;

  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #2196f3;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.08, '#2196f3')};
  }

  &:active {
    background: ${darken(0.08, '#2196f3')};
  }
`;
