FROM node:8.12.0-alpine as build
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["npm", "run build"]

FROM nginx:1.14-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80