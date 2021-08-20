import styled from 'styled-components';
import listImage from '../../Assets/checkmark.svg'

export const Container = styled.div`
  background-color: #fff;
`;

export const Header = styled.div`
  background-color: #e5e4e2;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;


  div.grid {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }

  div#texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div#texts h1 {
    color: #292929;
    font-size: 3em;
    margin-bottom: 15px;
    width: 70%;
  }

  div#texts p {
    color: #5A5444;
    font-size: 1.2em;

    &:nth-child(3) {
      margin-bottom: 20px;
    }
  }

  div#texts ul {
    list-style-position: inside;
    list-style-image: url(${listImage});
    margin-bottom: 20px;
  }

  div#texts ul li {
    color: #5A5444;
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div.send-email {
    /* border: 1px solid blue; */
  }

  div.send-email input {
    border-radius: 5px;
    border: 2px solid #d3d3d3;
    color: #d3d3d3;
    font-size: 1.2em;
    margin-right: 20px;
    padding: 15px 20px;

    ::placeholder {
      color: #d3d3d3;
    }
  }

  div.send-email button {
    background-color: #292929;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2em;
    padding: 15px 20px;
    cursor: pointer;
  }

  div#image  {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div#image img {
    width: 70%;
  }
`;
