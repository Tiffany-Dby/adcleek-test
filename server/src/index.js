import express from 'express';
import initMiddlewares from './middlewares/init.mddlwrs.js';
import initRoutes from './routes/init.routes.js';
import database from './databases/init.db.js';

const app = express();
const PORT = process.env.PORT || 9000;

database.init();

initMiddlewares(app);
initRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});