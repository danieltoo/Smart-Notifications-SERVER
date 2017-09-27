
FROM node 
ADD . /code
WORKDIR /code
EXPOSE 3000
CMD ["node", "app.js"]