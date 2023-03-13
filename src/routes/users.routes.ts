import { Router } from "express";
import { CreateUserUseController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserUseController = new CreateUserUseController();

usersRoutes.post("/", createUserUseController.handle);

export { usersRoutes };
