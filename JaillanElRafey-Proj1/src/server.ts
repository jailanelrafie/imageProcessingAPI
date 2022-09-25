//Setting up server
import express from 'express';
const app = express();
import routes from './routes/server';

const port = 3000;

app.listen(port, function (): void {
  console.log('Server is running');
});

app.use('/api', routes);

export default app;
