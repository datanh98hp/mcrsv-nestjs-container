FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run build booking-app 
RUN npm run build manage-reversations

FROM node:18 as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .
RUN npm build
RUN npm run build booking-app 
RUN npm run build manage-reversations

COPY --from=development /usr/src/app/dist ./dist

# CMD [ "npm","run","start:prod"," ; ","npm","run","start:prod:booking-app"," ; ","npm","run","start:prod:manage-reversations"]
# RUN npm start:prod:booking-app
# RUN npm start:prod:manage-reversations
CMD [ "npm","run","start:prod" ]


