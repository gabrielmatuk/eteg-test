import express from 'express';
import cors from 'cors';
import routes from './routes';

import { PORT } from '../src/config'

const app = express();

app.use(cors());

app.use('/api', routes)


app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
})