import styled from 'styled-components';

export const Container = styled.div`
  width: 980px;
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

  table {
    width: 100%;
    border-spacing: 0;

    thead th {
      text-align: left;
      color: #444;
      font-weight: bold;
      font-size: 16px;

      &:nth-child(2) {
        text-align: center;
      }

      &:nth-child(3) {
        text-align: center;
      }

      &:nth-child(4) {
        text-align: center;
      }

      &:nth-child(5) {
        text-align: center;
      }
    }

    tbody td {
      padding: 20px 0;
      font-size: 16px;
      color: #666;
      border-bottom: 1px solid #eee;

      button {
        background: none;
        border: 0;
        color: #666;
        transition: color 0.2s;

        &:hover {
          color: #6669b6;
        }
      }

      &:nth-child(2) {
        text-align: center;
      }

      &:nth-child(3) {
        text-align: center;
      }

      &:nth-child(4) {
        text-align: center;
      }

      &:nth-child(5) {
        text-align: center;
      }

      &:nth-child(6) {
        text-align: right;
      }
    }
  }
`;
