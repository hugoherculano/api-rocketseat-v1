import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        email: string;
        name: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersReposistory: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersReposistory.findByEmail(email);

        if (!user) {
            throw new Error("Email/Password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect!");
        }

        const token = sign({}, "1f0e5728-c67f-11ed-afa1-0242ac120002", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
