import axios from "axios";

const baseURL = process.env.REACT_APP_API_URI;

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

    async postServiceQuestion(serviceId: number, email: string, message: string) {
        return axios.post(baseURL + 'services_questions/send', 
        {
            serviceId,
            email,
            question: message
        })
    }

    async rateService(serviceId: number, rating: number, token: string) {
        return axios.post(baseURL + 'ratings/set-rating', 
            {
                serviceId: serviceId,
                mark: rating
            },
            {
                headers: {
                    'Authorization': `Bearer_${token}`
                }
            })
    }

    async postSupportQuestion(email: string, message: string) {
        return axios.post(baseURL + 'support-questions/send', 
        {
            email,
            question: message
        })
    }
}

export default FacilitiesService;