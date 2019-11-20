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
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #444;
      margin-bottom: 8px;
    }

    input {
      height: 45px;
      border-radius: 4px;
      border: 1px solid #ddd;
      text-indent: 15px;
      margin-bottom: 20px;
    }

    button {
      height: 45px;
      background: #6669b6;
      color: #fff;
      border: none;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }
`;
