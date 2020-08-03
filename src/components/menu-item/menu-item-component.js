import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const BackGroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
`;

const Content = styled.div`
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: white;
      opacity: 0.7;
      font-family: 'Open Sans Condensed', sans-serif;
      position: absolute;
`;

const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    & ${props => props.size} {
        height: 380px;
    }

    @media screen and (max-width: 500px) {
        height: 200px;
    }

    [&:first-child]: {
        margin-right: 7.5px;
    }

    [&:last-child]: {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;

        & ${BackGroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        
        & ${Content} {
            opacity: 0.9;
        }

    }
`;

const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

const SubTitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

const MenuItem = ({ name, imageUrl, linkUrl, size, history, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
           <BackGroundImage style={{ backgroundImage: `url(${imageUrl})` }}/>
            <Content> 
                <Title>{name.toUpperCase()}</Title>
                <SubTitle className="subtitle">SHOP NOW</SubTitle>
            </Content>
    </MenuItemContainer>
);

export default withRouter(MenuItem);