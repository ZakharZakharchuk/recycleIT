import axios from "axios";

const baseURL = 'http://localhost:8080/'

export class FacilitiesService {
    async getServicesTypes() {
        try {
            const res = await axios.get(baseURL + 'facilities/subtypes');
            return res.data
        } catch (error) {
            console.error(error);
        }
    }

    async getFacilities(location: string, typeId: string) {
        try {
            const res = await axios.get(baseURL + 'facilities/all');
            return res.data
        } catch (error) {
            console.error(error);
        }
    }

    async postServiceQuestion(userEmail: string, message: string) {
        try {
            return axios.post(baseURL, {})
        } catch (error) {
            console.error(error);
        }
    }

    async rateService(serviceId: number, rating: number) {

    }
}

export default FacilitiesService;