export class UserModel {
    constructor(
        public id: number | null,
        public firstName: string,
        public lastName: string,
        public role:UserRole
    ) { }
}

export enum UserRole{
    Admin,
    User
}