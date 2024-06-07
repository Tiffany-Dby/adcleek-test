import express from 'express';
import { CityController } from '../controllers/city.controllers.js';

const initCityRoutes = (app) => {
  const cityRouter = express.Router();

  // GET
  cityRouter.get("/", CityController.readAll);
  cityRouter.get("/:id", CityController.readOne);

  // POST
  cityRouter.post("/", CityController.create);

  app.use("/cities", cityRouter)
}

export default initCityRoutes;