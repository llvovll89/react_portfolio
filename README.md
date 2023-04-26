## 포트폴리오 사이트
### Description
```
2023/01 ~ 현재 진행중
```
리액트로 제작된 포트폴리오 사이트 입니다. (앞전 바닐라 JS에서 변경)

```
1) react hooks 공부를 위해 hook 사용 (useState, useEffect, useContext api , useRef 등)
2) react-router-dom 을 이용한 SPA 방식
3) db폴더에 data 를 따로 관리하여 map함수로 매핑하여 화면에 뿌리는 방식
4) contextAPI 를 통해 Darkmode를 만들어 전역적으로 관리
```
```
수정 할 사항
1) 전체적인 UI & UX 에 좀 더 신경써서 수정하기
2) CI/CD 해보기
3) 유지보수 & 리팩토링
```

```
이슈 & 해결사항
1) ReactProject section에 React의 각 프로트젝트를 cardForm으로 관리하는데 Key => item.id 가 먹질 않음..(이유 찾는중)
-> 현재는 ReactProject 섹션을 삭제하고 / Project로 통일
2) react-dom.development.js:86 Warning: Received `true` for a non-boolean attribute `p`. Error 발생
-> p 안에 들어가지 못할 클래스를 넣는바람에 생김으로, p를 단일 태그로 사용
3) project & about 컴포넌트 바꿀 때 DarkMode 적용이 안되는 이슈가 있었음
-> DarkContext로 useContext를 이용할 때 객체형식으로 받아와서 darkmode.darkmode 로 사용해야 했음
4) 
```

<span style="color: #07f">추가사항</span>

<div align="center">
    <div align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	    <br/>
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=JavaScript&logoColor=white" />
	<br>
</div>
</div>

### [PortFolio 보기](https://llvovll89.github.io/react_portfolio/)