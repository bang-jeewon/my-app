import React from 'react';
import styled from 'styled-components';

//functional 방식
const Home = (props) => {
    console.log('Home component 실행됐습니다');
    console.log(props);
    console.log(props.boards); //HomePage에서 여러개의 props가 넘어올 수 있다. props.users 등등

    // const boards = props.boards;

    //구조분할 할당 (boards 이름이 똑같아야 함) { boards, users } 이런식으로 받음
    //부모로부터 받은 user 데이터를
    const { boards, setBoards, number, setNumber, user } = props;

    const StyledDeleteButton = styled.button`
        color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
    `;

    const StyleAddButton = styled(StyledDeleteButton)`
        background-color: green;
    `;

    return (
        <div>
            <h1>홈: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>번호증가</button>

            <StyleAddButton user={user}>더하기</StyleAddButton>

            {/* 아래 태그에 넘겨주고 (user={user}) 이걸 다시 const StyleDeleteButton 태그에 보내줌 */}
            <StyledDeleteButton user={user} onClick={() => setBoards([])}>
                전체 삭제
            </StyledDeleteButton>

            <h1>홈페이지입니다.</h1>
            <div>
                {boards.map((b) => (
                    <h2>
                        제목 : {b.title} & 내용: {b.content}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default Home;
