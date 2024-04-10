FROM node:20.10.0 as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM gcr.io/distroless/nodejs:18 as prod

WORKDIR /app

COPY --from=build /app/.output/ /app/.output/

EXPOSE 3000

CMD ["/app/.output/server/index.mjs"]
