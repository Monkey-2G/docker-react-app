# base image
FROM node:10

# container 안에서 작업할 directory 생성
WORKDIR /usr/src/app

# CLI의 현 위치에 있는 파일 및 폴더들을 WORKDIR 위치에 복사
COPY ./ ./

# base image 이외에 추가적으로 설치할 명령어
RUN npm install

# container 시작 시 실행할 명령어
CMD ["node", "server.js"]