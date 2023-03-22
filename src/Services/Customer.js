import Axios from 'axios'

const baseUrl = "https://localhost:7298/api/customers"

const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newCustomer) => {
    return Axios.post(baseUrl, newCustomer)
}

export default {getAll, create}
