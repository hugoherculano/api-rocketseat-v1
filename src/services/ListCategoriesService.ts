import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { Category } from "../model/Category";

class ListCategoriesService {
    constructor(private listCategoriesService: CategoriesRepository) {}

    execute(): Category[] {
        return this.listCategoriesService.list();
    }
}

export { ListCategoriesService };
