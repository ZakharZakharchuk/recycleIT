import axios from "axios";

const baseURL = 'http://recycleit-env.eba-xtnxyihv.us-east-1.elasticbeanstalk.com/'

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
        return await axios.post(baseURL + 'facilities/all',  
            {
                facilityTypeId: typeId, 
                stateCode: location
            })
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