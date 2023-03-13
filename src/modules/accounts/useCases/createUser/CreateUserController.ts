import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserUseController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, driver_lincese, password, username } =
            request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            name,
            email,
            driver_lincese,
            password,
            username,
        });

        return response.status(201).send();
    }
}

export { CreateUserUseController };
