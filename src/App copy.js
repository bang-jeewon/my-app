import './App.css';
import { useMemo, useState, useEffect, useRef, createRef } from 'react';
import Sub from './Sub';
import Third from './aa/Third';
import { num } from './aa/Third';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router';

// 0. React엕진 - 데이터 변경 감지에서 UI그려주는!@
// 1. 실행과정(index.html) - SPA
// 2. 문법

// (1) return시에 하나의 Dom만 리턴할 수 있다
// (2) 변수선언은 let 혹은 const로만 해야함
// (3) jsx(즉 return안의 div에서) if사용 불가능 -> 삼항 연산자는 가능
// (4) 조건부 렌더링 -> 조건 && 값(true)
// (5) css디자인
/* - 내부에 적는 방법
   - 외부 파일에 적는 방법
   - 라이브러리 사용 (부트스트랩, component-style) */

let a = 10; //변수
const b = 20; //상수

function App() {
    //App이 실행된다는 것 = render함수가 실행된다는 것
    console.log('App 실행됨');

    var c = 20; // 자바스크립트는 모든게 객체야 a, b 모두 객체
    let d; //선언만 -> undefined => 변수는 있는데 값이 정의 안된거
    console.log(d);

    const mystyle = {
        color: 'red',
    };

    // let number = 1;
    const [number, setNumber] = useState(1); // React안에 hooks라이브러리를 사용한 것
    const add = () => {
        //더하기 함수
        // number++;
        setNumber(number + 1); //리엑트한테 number값 변경할게 라고 요청하는 것
        console.log('add', number);
    };

    const dec = () => {
        //빼기 함수
        setNumber(number - 1);
        console.log('dec', number);
    };

    let sample = [
        { id: 1, name: '홍길동1' },
        { id: 2, name: '홍길동2' },
        { id: 3, name: '홍길동3' },
        { id: 4, name: '홍길동4' },
    ];

    // const [sample, setSample] = useState([
    //     { id: 1, name: '홍길동1' },
    //     { id: 2, name: '홍길동2' },
    //     { id: 3, name: '홍길동3' },
    //     { id: 4, name: '홍길동4' },
    // ]);

    // let num = 5;
    const [num, setNum] = useState(5);

    //reference가 변경되야 화면이 바뀐다고 생각하면 됨
    const [users, setUsers] = useState(sample);
    const download = () => {
        // sample.push({ id: 5, name: '홍길동5' }); //sample데이터가 변경됐지만 화면은 안 바뀜

        // const newSample = sample.concat({ id: 5, name: '홍길동5' });
        //concat을 써서 sample은 안 바뀜. (concat 함수를 사용하면 새로운 변수에 넣어줘야 함)
        //근데 원래 users에 sample이 있었지만, newSample이 계속 들어오기 때문에, reference는 변경되는 거임.
        //그래서 화면은 계속 바뀜(즉, App 실행됨이 반복)

        // setUsers(newSample); //같은 reference(같은 메모리)를 참조하고 있음.

        //홍길동5의 데이터는 어떻게 받나요?
        // => ajax로 / fetch로 (fetch().then().then();)
        // setUsers([...sample, { id: num, name: '홍길동5' }]);  //=> 계속 추가되지 않음. 한번 추가된 데이터가 계속 수정됨
        setUsers([...users, { id: num, name: '홍길동5' }]); //re-rendering : 비록 똑같은 데이터이지만, reference가 다름 => 데이터를 다른 객체로 인식함
        setNum(num + 1);
        console.log(num);
    };

    let list = [1, 2, 3];

    const [data, setData] = useState(0);
    const [search, setSearch] = useState(0);

    const download2 = () => {
        //다운로드 받고 (통신)
        let downloadData = 5;
        setData(downloadData);
    };

    /**실행시점
     * (1) App() 함수가 최초 실행될때(마운트될때) = 그림이 그려질때
     *      => db에서 통신을 받아서 데이터 맨 처음 뿌려줄때
     * (2) 상태 변수가 변경될때마다
     * (3) 의존리스트 관리를 할 수 있다.
     */
    useEffect(() => {
        console.log('App()의 useEffect 실행됨');
        download2();
    }, [search]); //list를 비워두면([]), 어디에도 의존하지 않을게 => 최초에 딱 한번만 실행됨

    //useMemo => 메모라이제이션(어떤 연산된 값을 기억하는것)
    const [list2, setList2] = useState([1, 2, 3, 4]);
    const [str, setStr] = useState('합계');

    const getAddResult = () => {
        let sum = 0;
        list2.forEach((i) => {
            sum = sum + i;
        });
        console.log('sum함수 실행됨', sum);
        return sum;
    };

    //getAddResult() 실행시, list2에만 의존하겠다??? str이 바뀐다고해서 getAddResult()를 다시 실행하지 않겠따
    const addResult = useMemo(() => getAddResult(), [list2]);

    //useRef (디자인): dom을 변경할 때 사용
    const myRef = useRef(null);

    const [list3, setList3] = useState([
        { id: 1, name: '길동' },
        { id: 2, name: '길동2' },
    ]);

    //myRefs가 배열로 만들어짐??
    const myRefs = Array.from({ length: list3.length }).map(() => createRef());

    //렌더링 시점 = 상태값 변경시 (useState 감지시??)
    //자식 Sub까지 다시 렌더링
    return (
        <div>
            <Header />
            {/* <HomePage /> */}
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/login" exact={true} component={LoginPage} />
            <Footer />

            <button
                onClick={() => {
                    myRef.current.style.backgroundColor = 'red';
                    myRefs[0].current.style.backgroundColor = 'red';
                }}
            >
                색 변경
            </button>
            <div ref={myRef}>박스</div>
            <div>
                {list3.map((user, index) => (
                    <h1 ref={myRefs[index]}>{user.name}</h1>
                ))}
            </div>
            <button
                onClick={() => {
                    setList2([...list2, 10]);
                }}
            >
                리스트에 값 추가
            </button>
            <button
                onClick={() => {
                    // setList2([...list2, 10]);
                    setStr('Hi');
                }}
            >
                문자 변경
            </button>
            <div>
                {list2.map((l) => (
                    <h1>{l}</h1>
                ))}
            </div>
            <div>
                {/* {str}: {getAddResult()} */}
                {str}: {addResult}
            </div>
            <div>
                <button
                    onClick={() => {
                        setSearch(2);
                    }}
                >
                    검색하기
                </button>
                <h1>데이터: {data}</h1>
                <button
                    onClick={() => {
                        setData(data + 1);
                    }}
                >
                    더하기
                </button>
            </div>

            {num}
            <Third />

            <div>{list[0]}</div>
            <div>
                {list.map((n) => (
                    <h1>{n}</h1>
                ))}
            </div>
            <button onClick={download}>다운로드</button>
            {users.map((user) => (
                <h1>
                    {user.id} - {user.name}
                </h1>
            ))}
            <div>
                <button onClick={add}>더하기</button>
                <button onClick={dec}>빼기</button>
                <h1>숫자: {number}</h1>
                <Sub />
            </div>
            <div style={mystyle}>
                안녕1 {a === 10 ? '10입니다' : '10이 아닙니다'}
            </div>
            <h1>해딩태그 {b === 20 && '20입니다.'}</h1>
            <hr />
        </div>
    );
}

export default App;
