import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/directory';

//** STYLED-COMPONENT */
const LandingPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    dding: 20px 80px;
`;

//** COMPONENTS */
const Homepage = () => (
    <LandingPage>
        <Directory />
    </LandingPage>
)

export default Homepage;