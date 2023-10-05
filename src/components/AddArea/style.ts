import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid #555;
  padding: 10px;
  margin: 20px 0;
  align-items: center;
  border-radius: 10px;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0px;
    background-color: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`;
