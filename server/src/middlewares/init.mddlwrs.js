import cors from "cors";
import express from "express";
import helmet from "helmet";

const initMiddlewares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:9000'],
    credentials: true
  }));
  app.use(helmet());
}

export default initMiddlewares;