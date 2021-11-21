import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
    return (
        <StyledHeader backgroundColor={'blue'}>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/login">로그인</Link>
                </li>
            </ul>
        </StyledHeader>
    );
};

export default Header;
