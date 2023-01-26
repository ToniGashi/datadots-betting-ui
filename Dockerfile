#docker pull node:19.4.0-alpine3.17
FROM node:19.4.0-alpine3.17 AS builder
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
#RUN yarn install --production
# Copy app files
COPY . .
# Build the app
RUN yarn build

# Bundle static assets with nginx
# docker pull nginx:1.23.3-alpine-slim
FROM nginx:1.23.3-alpine-slim as development
ENV NODE_ENV development
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80:80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
#ENTRYPOINT ["run", "-p 80:80"]