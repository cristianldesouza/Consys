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

  table {
    width: 100%;
    border-spacing: 0;

    thead th {
      text-align: left;
      color: #444;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
