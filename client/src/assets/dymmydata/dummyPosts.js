const dummyPosts = [
    {
        "post_id" : "1",
        "title": "Home에서 보여질 포스트",
        "content": `선언형\n
        React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요. 그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링합니다.
        
        선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 줍니다.
        
        컴포넌트 기반\n
        스스로 상태를 관리하는 캡슐화된 컴포넌트를 만드세요. 그리고 이를 조합해 복잡한 UI를 만들어보세요.
        
        컴포넌트 로직은 템플릿이 아닌 JavaScript로 작성됩니다. 따라서 다양한 형식의 데이터를 앱 안에서 손쉽게 전달할 수 있고, DOM과는 별개로 상태를 관리할 수 있습니다.
        
        한 번 배워서 어디서나 사용하기\n
        기술 스택의 나머지 부분에는 관여하지 않기 때문에, 기존 코드를 다시 작성하지 않고도 React의 새로운 기능을 이용해 개발할 수 있습니다.
        
        React는 Node 서버에서 렌더링을 할 수도 있고, React Native를 이용하면 모바일 앱도 만들 수 있습니다.
        
        `,
        "created_at": "2022-04-20",
        "updated_at": "2022-04-20",
        "writer": "kimcoding",
    },
    {
        "post_id" : "2",
        "title": "제목_2",
        "content": "내용_2 \n 줄바꿈 테스트",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-20",
        "writer": "kimcoding",
    },
    {
        "post_id" : "3",
        "title": "제목_3 아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주 긴 제목",
        "content": "내용_3",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "kimcoding",
    },
    {
        "post_id" : "4",
        "title": "제목_4",
        "content": "내용_4",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "kimcoding",
    },
    {
        "post_id" : "1334123123",
        "title": "긴제목_react' is defined but never used",
        "content": "긴_내용_1WARNING in src/App.jsx Line 2:8: \n  'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars 긴_내용_1WARNING in src/App.jsx Line 2:8:   'react' is defined but never used no-unused-vars Line 2:17:  'useEffect' is defined but never used  no-unused-vars",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "parkcoding",
    },
    {
        "post_id" : "41",
        "title": "더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
    {
        "post_id" : "51",
        "title": "더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
    {
        "post_id" : "42",
        "title": "더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
    {
        "post_id" : "43",
        "title": "아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주 긴 더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
    {
        "post_id" : "44",
        "title": "더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
    {
        "post_id" : "45",
        "title": "더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
    {
        "post_id" : "46",
        "title": "더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
    {
        "post_id" : "47",
        "title": "더미 제목",
        "content": "아무런 의미가 없는 내용",
        "created_at": "2022-04-20",
        "updated_at": "2022-04-21",
        "writer": "lllll",
    },
];

export default dummyPosts;