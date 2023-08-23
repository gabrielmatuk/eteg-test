import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import routes from '@routes';
import { errorHandler } from '@middlewares/error-handler.middleware';
import { PORT } from '@src/config';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
