FROM node:9-alpine as angular_build

COPY ./angular-frontend/package.json ./
COPY ./angular-frontend/package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY ./angular-frontend .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod

FROM abiosoft/caddy:0.11.0
COPY --from=angular_build /ng-app/dist /angular
COPY ./compose/production/caddy/Caddyfile /etc/Caddyfile
