interface ICreateUserDTO {
    id?: string;
    name: string;
    password: string;
    email: string;
    driver_lincese: string;
    avatar?: string;
}

export { ICreateUserDTO };
