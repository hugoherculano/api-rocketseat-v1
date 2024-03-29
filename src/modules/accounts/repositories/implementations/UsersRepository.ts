import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.repository.findOne({ email });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);

        return user;
    }

    async create({
        name,
        email,
        driver_lincese,
        password,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = await this.repository.create({
            name,
            email,
            driver_lincese,
            password,
            avatar,
            id,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };
