FROM node

WORKDIR /app

COPY package.json yarn.lock /app
RUN cd /app \
    && yarn install --pure-lockfile

COPY . /app
CMD tail -f package.json 
