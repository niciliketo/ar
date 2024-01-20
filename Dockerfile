#FROM node

#WORKDIR /app

#COPY package.json yarn.lock /app
#RUN cd /app \
#    && yarn install --pure-lockfile

#COPY . /app
# Command to keep the container alive
#CMD tail -f package.json 
