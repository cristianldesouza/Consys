import styled from 'styled-components';

export const Container = styled.div`
  width: 790px;
  margin: 20px auto 0;
  padding: 20px 20px;
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

  div {
    strong {
      display: block;
      color: #444;
      font-size: 18px;
      margin-bottom: 30px;
    }

    table {
      width: 100%;
      border-spacing: 0;

      tbody td {
        padding: 20px 0;
        font-size: 16px;
        color: #666;
        border-bottom: 1px solid #eee;
        text-align: center;

        a {
          margin-left: 10px;
          border: 0;
          background: 0;
          color: #666;
          transition: color 0.2s;

          &:hover {
            color: #6669b6;
          }
        }
      }
    }
  }
`;
