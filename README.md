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
   8. 사용하지 않는 파일 제거 
      1. npm i -D clean-webpack-plugin
3. babel 설치
4. lint 설치
5. react 설치
