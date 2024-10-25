import styled from "styled-components";

export const PortifolioContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    width: 520px;
    height: 620px;
    background-color: #1F2326;
    border-radius: 22px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    img {
        width: 150px;
        margin-top: 20px;
        border-radius: 50%;
    }

    h1 {
        font-size: 32px;
        color: #fff;
    }

    footer {
        margin-top: auto;
        bottom: 0;
        height: 40px;
        width: 100%;
        font-size: 12px;
        background-color: #0D0D0D;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 22px 22px;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 16px;
    color: #BABDBF;
  }

  span {
    margin-top: 260px;
  }

  a {
    color: #fff;
    margin-right: 12px;
    margin-left: 12px;
    font-size: 24px;
    transition: 250ms all;

    &:hover {
        color: #BABDBF;
    }
  }
`