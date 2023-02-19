import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private listCategoriesUseCase: ICategoriesRepository) {}

    execute(): Category[] {
        return this.listCategoriesUseCase.list();
    }
}

export { ListCategoriesUseCase };
