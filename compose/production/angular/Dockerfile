FROM node:9-alpine

COPY ./angular-frontend/package.json ./
COPY ./angular-frontend/package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY ./angular-frontend .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod

# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload
EXPOSE 4200 49153

COPY ./compose/production/angular/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start

