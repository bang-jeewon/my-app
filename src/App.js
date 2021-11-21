import './App.css';

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
    var c = 20; // 자바스크립트는 모든게 객체야 a, b 모두 객체
    let d; //선언만 -> undefined => 변수는 있는데 값이 정의 안된거
    console.log(d);

    const mystyle = {
        color: 'red',
    };

    let list = [1, 2, 3];

    return (
        <div>
            <div>{list[0]}</div>
            <div>
                {list.map((n) => (
                    <h1>{n}</h1>
                ))}
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
