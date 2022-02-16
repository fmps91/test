FROM node:current-slim
WORKDIR /app
#COPY /serverTest/. /app




#RUN apt install -y <package1> <package2>
#ENV NODE_VERSION 15.8.0
#RUN apt update\
#    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash\
#    && . $HOME/.nvm/nvm.sh\
#    && nvm install $NODE_VERSION
#ENV NODE_PATH /root/.nvm/v$NODE_VERSION/lib/node_modules
#ENV PATH /root/.nvm/versions/node/v$NODE_VERSION/bin:$PATH
EXPOSE 3000:3000

RUN npm install

RUN npm run build
#CMD [ "npm","run","build" ]
#ENTRYPOINT ["npm","run","dev"]
#solo con pull request

#https://futurestud.io/tutorials/github-actions-run-on-pull-request
#cuando generas pull_request a la rama master

