import axios from "axios";

const baseURL = process.env.REACT_APP_API_URI;

export class AuthService {
    async register(username: string, email: string, password: string) {
        return await axios.post(baseURL + 'register', {username, email, password})
    }

    async login(email: string, password: string) {
        return await axios.post(baseURL + 'login', {email, password})
    }
}
