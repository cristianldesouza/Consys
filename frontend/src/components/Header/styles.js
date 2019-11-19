import styled from 'styled-components';

export const Container = styled.header`
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 60px;
  background: #fff;
  border: 1px solid #ddd;
  div {
    display: flex;
    align-items: center;
    img {
      height: 50px;
      width: 120px;
      padding-right: 30px;
      margin-right: 30px;
      border-right: 1px solid #979797;
    }
  }
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const Navigation = styled.li`
  margin-right: 25px;

  a {
    font-size: 16px;
    font-weight: bold;
    color: #999;
    transition: color 0.2s;

    &:hover {
      color: #6669b6;
    }
  }
`;

export const Profile = styled.div`
  a {
    svg {
      color: #999;
      transition: color 0.2s;

      &:hover {
        color: #6669b6;
      }
    }
  }

  a.active {
    svg {
      color: #6669b6;
    }
  }
`;
