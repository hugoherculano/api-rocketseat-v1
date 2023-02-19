import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUserCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
    createCategoryUserCase
);

export { createCategoryController };
