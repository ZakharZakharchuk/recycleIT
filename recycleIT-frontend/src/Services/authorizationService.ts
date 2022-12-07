import axios from "axios";

const baseURL = 'http://recycleit-env.eba-xtnxyihv.us-east-1.elasticbeanstalk.com/'

export class AuthService {
    async register(username: string, email: string, password: string) {
        return await axios.post(baseURL + 'register', {username, email, password})
    }

    async login(email: string, password: string) {
        return await axios.post(baseURL + 'login', {email, password})
    }
}
