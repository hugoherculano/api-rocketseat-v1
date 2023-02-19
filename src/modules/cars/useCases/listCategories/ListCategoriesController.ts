import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        return response.status(200).json(this.listCategoriesUseCase.execute());
    }
}

export { ListCategoriesController };
