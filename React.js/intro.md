# React.js

### 2022-12-11

### 시간표<br>

10:10 ~ 11:00<br>
11:10 ~ 12:00<br>
12:10 ~ 13:00<br>
13:00 ~ 13:40 점심시간 <br>
13:40 ~ 14:30<br>
14:40 ~ 15:30<br>
15:40 ~ 16:30<br>
16:40 ~ 17:30

- 2일 결근 가능
- 6주부터는 포폴 완성될 수 있도록 커리큘럼 짜여짐.

---

## React 특징

- html css javascript 기본으로 사용할 수 있어야함.
- javascript ES6 언어 기반으로 만들어짐.
- ES6를 사용하여 리액트 네이티브, 여러가지 프레임 워크를 사용할 수 있는 확장성이 큼.
- 라이브러리 방식. 어딘가에 끼워 넣는 방식으로 필요 없으면 해당 부분만 빼낼 수 있음.
- npm 패키지
- React를 사용하는 가장 큰 이유는 <b>성능 최적화 최고 효율</b>로 만들기 위해서 사용.
- node.js 용량이 크기 때문에 무조건적 사용은 X.
- 무조건 node.js 설치되어있어야함.
- 정적인 페이지와는 맞지 않다.

참고 사이트

- [ES6 문법](https://hanamon.kr/javascript-es6-%EB%AC%B8%EB%B2%95/)
- [에어비앤비 사이트](https://www.airbnb.co.kr/)
- [jsbin - javascript console 사용해보는 사이트](https://jsbin.com/?html,output)

<br>

**일반적인 엘리먼트 불러오기** 방식

- 랜더링(서버로부터 HTML 파일을 받아 브라우저에 뿌려주는 과정) -> HTML(마크업) -> DOM 도큐먼트 객체(문서영역) 찾아서 읽기
- 일반적인 엘리먼트 읽는 법은 MVC(Model->View->Controler(사용자))기반

<br>

**React** 불러오는 방식

- 유지보수 안정화때문에 인기가 많음.
- 변경이 필요한 데이터만 랜더링을 따로 줌.(일반적인 방식으로 처음부터 타고 올라오지 않아도 됨.)
- 메모리를 아낄 수 있음.
- MVC 중 View만 신경쓰면 됨.
- 영역을 component 조각으로 만들어서 재사용가능.

<br>

----

## 프레임워크와 라이브러리 차이

**프레임워크** 
- 원하는 기능 구현에 집중하여 개발할 수 있도록 일정한 형태와 필요한 기능을 갖추고 있는 골격, 뼈대를 의미.
- 애플리케이션 개발 시 필수적인 코드, 알고리즘, DB 연동과 같은 기능들을 위해 어느 정도 뼈대(구조)를 제공하며 이러한 뼈대 위에서 사용자는 코드를 작성하여 애플리케이션을 개발. 
- 앱/서버 등의 구동, 메모리 관리, 이벤트 루프 등의 공통된 부분은 프레임워크가 관리하며, 사용자는 프레임워크가 정해준 방식대로 클래서, 메서드들을 구현하면 됩니다.

프레임워크 사용 예시

- Java 서버 개발에 사용되는 Spring
- Python 서버 개발에 사용되는 Django, Flask
- 안드로이드 앱 개발에 사용되는 Android
- 아이폰 앱 개발에 사용되는 Cocoa Touch
- 웹 개발에 사용되는 Angular, Vue.js 등
- 자바 기반의 JSP를 위한 프레임 워크 Struts
- 루비로 작성된 MVC패턴을 이용하는 Ruby on Rails
- Express.js는 Node.js에서 가장 인기가 많은 "Web Framework"

<br>

**라이브러리**

- 소프트웨어를 개발할 때 컴퓨터 프로그램이 사용하는 비휘발성 자원의 모임. 즉 특정 기능을 모와둔 코드, 함수들의 집합이며 코드 작성 시 활용 가능한 도구들을 의미

라이브러리 사용 예시

- Python pip로 설치한 패키지/모듈 (tensorflow, pandas, beautifulsoup 등등)
- C++의 표준 템플릿 라이브러리 (STL)
- Node.js에서 npm으로 설치한 모듈
- HTML의 클라이언트 사이드 조작을 단순화하는 JQuery
- 웹에서 사용자 인터페이스 개발에 사용되는 React.js

<br>

- 프레임워크 - 형식(틀)이 정해져있음. 해당 환경만 이해하면 됨.
- 라이브러리 - 형식이 자유롭지만, 추가적인 환경을 모두 이해해야함.

<br>

----

## API

- 잘 만들어 놓은 동작, 기능들 (ex: 카카오 위치기반 주소검색기능, 구글 통계, 구글 지도 API)
- 위젯처럼 독립적으로 소스를 붙이거나 설치

## Plug-in 
프로그램에 종속되어 설치해서 사용. 다른 프로그램에서는 사용 X

## Module 
개별 프로그램의 작은 단위

<br>

참고사이트

[API Plug-in Module 차이점](http://www.theprconsulting.com/?p=2842)

<br>

----
## 랜더링

```js
render(){...} //함수
```

초기 랜더링

- 전체 불러오기

리 랜더링

- 변한 부분만 변경

<br>

### 일반적으로 사용하는 DOM 특징

- 자체는 빠르나 소스를 불러오는 과정들이 필요함.
- document object model - 객체. 객체로 문서 구조를 표현하는 방법 (xml, html)
- DOM에 자바스크립트 적용
- 트리형태의 구조
- 단점 : 정적인 언어 html -> 동적이지않아서 변경된 부분 감지X

### React 사용하는 **virtual dom - 가상 돔**

실제로 DOM을 만들지 않고 가상 돔을 만듬.

1. 데이터를 업데이트하면 전체 ui를 virtual dom에 리렌더링 한다.
2. 이전 virtual dom에 있던 내용과 현재 내용을 비교
3. 바뀐 부분만 실제 dom에 적용.

<br>

----

## babel

- ES6 -> ES5 변환(크로스브라우징 때문에 상위버전으로 하위버전으로 변환해줘야함.)

- 모듈화된 코드를 한 파일로 합치는(번들링) 코드를 수정할 때마다 웹 브라우저를 리로딩하는 등의 기능을 하는 웹팩(Webpack)

<br>

----

## node.js 설치

react 실행하기전 node.js 설치 필수

### **npm**

- node 패키지 매니저 도구
- npm으로 개발자가 만든 패키지 (재사용 가능한 코드)
- 패키지의 버전을 관리할 수도 있다.

### npm의 장단점

- npm은 배포가 쉽고 종속성을 쉽게 해결할 수 있다는 장점이 있지만 패키지가 중복으로 설치될 수 있다는 단점이 있다.
- node_modules를 관리하면서의 불편한 점을 개선하기 위해 Yarn이 탄생

<br>

[node.js 설치](https://nodejs.org/ko/download/) (LTS 버전 설치)

node.js 설치 후 버전 확인

> $ node -v

### **nvm**

mac ios, 또는 리눅스를 사용하는 환경 cmd에 입력하여 확인

맥, 윈도우 상관없이 통합적으로 확인

> $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh

> $ nvm —version

<br>

참고사이트

[npm과 nvm](https://lynmp.com/ko/article/tb585d114096490055)

[npm / npx / yarn](https://hanamon.kr/npm-npx-%ec%b0%a8%ec%9d%b4/)

<br>

----

## yarn

- npm을 대체할 수 있는 도구
- npm보다 빠르고 효율적으로 캐시시스템, 기타 부가기능을 제공.

yarn 설치

> $ npm install —global yarn

yarn 버전 확인

> $ yarn --version

[yarn 설치 참고사이트](https://classic.yarnpkg.com/en/docs/install#windows-stable)

<br>

----

## git bash

- 협업 도구
- git bash 를 사용하면 mac과 window에서 동일하게 사용가능.

### **git bash download**

- [mac(ios) download link](https://git-scm.com/download/mac)

- [window download link](https://git-scm.com/download/)

Download for Windows > Standalone Installer > 64-bit Git for Windows Setup.


<br>

vscode 터미널 git bash 창에 입력

> $ yarn create react-app hello-react

[React 프로젝트 작업 환경 구성 및 시작하기](https://chanhuiseok.github.io/posts/react-2/)

cmd 입력 버전

> $ npm create-react-app hello-react

> $ yarn create-react-app hello-react

<br>

다음 과정

> $ cd hello-react

> $ yarn start

<br>

페이지 미리보기 진입 사이트 - http://localhost:3000/

<br>

----

## vscode 도구 설치

### ESLint

자바스크립트 문법 및 코드 스타일을 검사해주는 도구

### Reactjs code snippets

publisher:"charalampos karypidis"

리액트 컴포넌트 및 라이프 사이클 함수를 작성할때 단축단어를 사용하여 간편하게 코드를 자동 생성 할 수 있는 코드 스니펫 모음.

### prettier-code formatter

코드 스타일을 자동으로 정리해주는 도구.

### korean language pack for visual astudio code

한국어

### Auto Rename Tag

태그 앞을 변경하면 닫히는 태그 자동 변환

<br>

---
