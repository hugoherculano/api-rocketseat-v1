import { Category } from "../model/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class ListCategoriesService {
    constructor(private listCategoriesService: ICategoriesRepository) {}

    execute(): Category[] {
        return this.listCategoriesService.list();
    }
}

export { ListCategoriesService };
