import { styled } from "styled-components";


export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    row-gap: 20px;
  }

  input {
    padding: 5px;
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

export const FilterButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #00c853;
  color: #fff;
  width: 100%;
  max-width: 100px;
  height: 30px;
`;

export const Label = styled.label`
  margin-right: 10px;
  font-weight: 500;
`;