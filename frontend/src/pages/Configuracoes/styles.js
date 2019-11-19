import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 20px auto 0;
  padding: 20px 0;
  background: #fff;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
      width: 400px;
      height: 45px;
      border-radius: 4px;
      border: 1px solid #ddd;
      text-indent: 15px;
      margin-bottom: 8px;
    }

    button {
      height: 45px;
      background: #6669b6;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  strong {
    font-size: 16px;
    color: #444;
  }
`;
