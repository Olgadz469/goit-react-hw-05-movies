import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border: 3px solid #191d1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  outline: none;

  &:hover {
    color: #f52c08;
    border: 3px solid tomato;
  }
`;
export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: #f52c08;
    border: 3px solid #f52c08;
  }
`;
