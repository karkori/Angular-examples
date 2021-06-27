export interface User{
    id: Number,
    name: String,
    email: String,
    type: UserType
}

export enum UserType {
    admin, moderator, user
}

