import express from 'express';
import imPro from './api/imageProcessing';

const routes = express.Router();

routes.get('/', function (request, response): void {
  response.send('main api route');
});

routes.use('/impro', imPro);

export default routes;
