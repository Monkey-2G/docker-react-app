# Base Image 
FROM node:10 

# image 안에서 app 소스 코드를 가지고 있을 경로를 생성
WORKDIR /usr/src/app

# COPY : 우리가 설정한 package.json은 Base Image를 토대로 임시 container에서 Image build를 할 때에는 외부에 존재하는 파일이기 때문에
# 임시 container 안에서 찾을 수가 없다. 그러므로 설정한 값을 Docker 안에 적용하려면 COPY라는 명령어를 통해 임시 container로 package.json을 보낸다.
# RUN npm install 명령어가 실행되기 전에 복사가 되어야 하므로 COPY 명령어는 RUN 위에 있어야 한다.
# COPY [COPY할 Local의 파일 or 파일들의 경로] [container 내부에서 복사 할 경로]
COPY ./package.json ./

# 추가적으로 필요한 파일을 다운로드 받는다.
# npm : Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램
# npm install : package.json 파일에서 dependencies에 기술한(종속성) express 모듈을 NPM Registry에서 다운받아서 사용할 수 있게끔 하는 명령어.
RUN npm install

# 11 Line의 package.json에 따로 COPY만 선언한 이유는 package.json이 수정되지 않고 소스코드만 수정이 되었을 경우,
# package.json은 16 Line에서 최초 한 번만 build가 되고, image caching처리가 된다.
# 후에 소스코드만 변경하여 다시 build를 할 때에는 package.json을 caching된 image에서 처리하기 때문에 새로 빌드하지 않아도 된다.
# 그러므로, package.json은 따로 한 번만 COPY하여 설치하고, 그 외의 소스 코드들은 아래와 같이 ./ ./로 COPY하게 되면 build는 한 번만 되는 것이다.
COPY ./ ./

# 컨테이너 시작 시 실행 될 명령어를 명시한다.
# node : [서버 작동 명령어, entryd file] 
CMD ["node", "server.js"]

