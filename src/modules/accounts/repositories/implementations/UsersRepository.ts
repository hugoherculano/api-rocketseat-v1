import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        email,
        driver_lincese,
        password,
        username,
    }: ICreateUserDTO): Promise<void> {
        const user = await this.repository.create({
            name,
            email,
            driver_lincese,
            password,
            username,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };
