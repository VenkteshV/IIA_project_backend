FROM node:8.9.4-alpine
COPY . /researcheye_backend
WORKDIR /researcheye_backend
RUN npm install && \
    npm run build && \
    npm cache verify
EXPOSE 5000
CMD npm run serve-prod
