/* eslint-disable semi */
export default interface User {
    userId: string;
    username: string;
    name: string;
    email: string;
    accessToken: string;
    role: string
}

export interface AuthState {
    username: string;
    password: string;
}