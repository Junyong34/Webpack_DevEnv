## front-end 개발 환경 구축하기

>노드 기본 설치 (v14.17.0)

1. npm 설치
   1. 명령어 npm init 
      1. package.json 셋팅
2. webpack 설치 및 설정
   1. 명령어 npm i -D webpack webpack-cli
   2. 설정을 위한 파일 webpack.config.js
   3. package.json Script build 추가
      1. "build:prod": "webpack --mode production"
      2. "build:dev": "webpack --mode development"
         1. 각 모드 별로 webpack 번들링 파일 내용이 달라진다.
   4. 번들링 된 디렉토리에 html 파일도 포함시키기 위해서 플러그인을 설치한다.
      1. 명령어 npm i html-webpack-plugin
   5. 매번 빌드하는건 비효율적이라 플러그인을 설치한다.
      1. 명령어 npm i webpack-dev-server -D
      2. webpack.config.js devServer 설정값을 추가 한다. 
      3. script 추가 한다.
         1."start": "webpack serve --open --mode=development"
   6. style 설정
      1. 명령어 npm i -D style-loader css-loader (internal css 방식)
      2. 명령어 npm i -D mini-css-extract-plugin (external css 방식)
   7. file 로더 설정
      1. 명령어 npm i -D file-loader
   8. 사용하지 않는 파일 제거 ( 빌드 이전 결과물을 제거)
      1. npm i -D clean-webpack-plugin
   9. 번들링 된 소스에 배너를 추가한다.
      1. new webpack.BannerPlugin 셋팅
   10. Webpack 커스텀 플러그인 만들기
       1. Class를 생성하여 compiler.hooks을 이용하여 컴파일 시점에 start 시간을 찍어본다.
   11. data url scheme plugin 이용하여 이미지를 Base64 인코딩 하기
       1. 명령어 npm i -D url-loader
3. babel 설치
   1. 명령어 npm i -D @babel/core @babel/cli
   2. 프리셋 사용기
      1. preset-env, preset-flow, preset-react, preset-typescript
      2. preset-env는 ECMAScript2015+으로 변환시 사용한다.
      3. 명령어 npm i -D @babel/preset-env
      4. npx babel src/common/babelTransCode.js로 바벨 트랜스파일된 결과를 확인해보자
   3. 웹팩으로 통합
      1. 명령어 npm i -D babel-loader
      2. 폴리필 사용하기 위해 core-js 설치
         1. 명령어 npm i -D core-js@
4. lint 설치
   1. 오래된 스웨터의 보푸라기 같은 것을 린트(Lint)라고 부른다. 코드에서도 보프라기가 있다. 들여쓰기 변수 할당하고 사용안하거나...
   2. 명령어 npx eslint --init
      1. 대화식 명령어 내 프로젝트 환경에 맞춰서 셋팅해준다
5. prettier 설치
   1. 명령어 npm i -D prettier
   2. npx prettier src/index.js --write && npx prettier src/index.js --fix 실행하여 검사
   3. ESLint + Prettier 통합
      1. 명령어 npm i -D eslint-config-prettier eslint-plugin-prettier
6. 자동화
7. react 설치
