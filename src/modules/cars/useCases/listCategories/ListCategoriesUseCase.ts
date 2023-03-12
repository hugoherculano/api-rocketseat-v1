import { Category } from "../../entities/Category";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private listCategoriesUseCase: ICategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        return await this.listCategoriesUseCase.list();
    }
}

export { ListCategoriesUseCase };
