import React from 'react';
import styled from 'styled-components';

//styled-component => js파일과 css파일을 한번에 관리할 수 있음
const StyledFooter = styled.div`
    border: 1px solid black;
    height: 300px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <ul>
                <li>오시는길: 서울시 강남구...</li>
                <li>전화번호: 022222</li>
            </ul>
        </StyledFooter>
    );
};

export default Footer;
