import Axios from 'axios'

const baseUrl = "https://localhost:7298/api/users"

const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newUser) => {
    return Axios.post(baseUrl, newUser)
}

const remove = (id) => {
    return Axios.delete(`${baseUrl}/${id}`)
}

const update = (object) => {
    return Axios.put(`${baseUrl}/${object.userId}`, object)
}


export default { getAll, create, remove, update }
