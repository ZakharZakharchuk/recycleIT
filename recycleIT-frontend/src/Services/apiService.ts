import axios from "axios";

const baseURL = 'http://recycleit-env.eba-xtnxyihv.us-east-1.elasticbeanstalk.com/'

export class FacilitiesService {
    async getServicesTypes() {
        try {
            const res = await axios.get(baseURL + 'facilities/subtypes');
            console.log(res);
            
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
        // axios.defaults.headers.common['Authorization'] = `Bearer_${token}`;
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