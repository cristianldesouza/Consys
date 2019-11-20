import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  margin: 20px auto 0;
  padding: 20px 10px;
  background: #fff;
  border-radius: 4px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      display: block;
      color: #444;
      font-size: 24px;
      margin-bottom: 30px;
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #444;
    }

    div.normal {
      display: flex;
      flex-direction: column;
      input {
        width: 100%;
        height: 38px;
        border-radius: 4px;
        border: 1px solid hsl(0, 0%, 80%);
        text-indent: 10px;
      }
    }
  }

  > button {
    height: 45px;
    background: #6669b6;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 10px auto;
    width: 100%;
  }
`;
