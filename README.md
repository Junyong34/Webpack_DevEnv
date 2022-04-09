## front-end 개발 환경 구축하기

>노드 기본 설치 (v14.17.0)

1. npm 설치
   1. 명령어 npm init 
      1. package.json 셋팅
2. webpack 설치
   1. 명령어 npm i -D webpack webpack-cli
   2. 설정을 위한 파일 webpack.config.js
   3. package.json Script build 추가
      1. "build:prod": "webpack --mode production"
      2. "build:dev": "webpack --mode development"
         1. 각 모드 별로 webpack 번들링 파일 내용이 달라진다.
3. babel 설치
4. lint 설치
5. react 설치
