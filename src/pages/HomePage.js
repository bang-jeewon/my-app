import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
import Home from '../components/home/Home';

//page는 여러 components를 들고 있는 애
const HomePage = () => {
    //http 요청 (fetch, jquery ajax, axios(다운))

    const [boards, setBoards] = useState([]);
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({});

    // let bo;

    //빈배열이면 무조건 한번만 실행
    useEffect(() => {
        //여기에 다운로드 받았다 가정
        let data = [
            { id: 1, title: '제목1', content: '내용1' },
            { id: 2, title: '제목2', content: '내용2' },
            { id: 3, title: '제목3', content: '내용3' },
        ];

        // bo = data; // => 이렇게 상태변수가 아닌걸로 만들면, 그림이 다시 그려지지 않기 때문에 데이터가 넘어가지 않음

        //HomePage가 제일 먼저 실행되고, useEffect가 최초 한번 실행될때는 "빈 데이터"가 들어갈 수밖에 없음
        setBoards([...data]);
        setUser({ id: 1, username: 'ssar' });
    }, []);

    return (
        <div>
            {/* <Header /> */}
            {/* 아래처럼 넘어간 데이터를 'props'라고 함 / <Home/>만들때 boards데이터 들고감 */}
            <Home
                boards={boards}
                setBoards={setBoards}
                number={number}
                setNumber={setNumber}
                user={user}
            />
            {/* <Footer /> */}
        </div>
    );
};

export default HomePage;
