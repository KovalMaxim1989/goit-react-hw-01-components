import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin: 50px auto;
  width: 90%;
  padding: 5px;
  box-shadow: 5px 5px 20px 10px rgba(85, 63, 24, 0.75);
  border-radius: 5px;
  text-align: center;
  & thead {
    background-color: #553f18;
  }
  & tr:hover {
    background-color: #553f18;
    font-weight: 700;
    text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
  }
  & th,
  & td {
    padding: 10px 15px;
    border: 1px solid #553f18;
    border-radius: 10px;
  }
`;