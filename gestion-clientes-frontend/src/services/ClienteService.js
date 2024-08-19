import axios from "axios";
//con esto consume el backend
//no se si la manera que lo hace es lamejor pero funciona
const CLIENTE_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";
class ClienteService{
    getAllClientes(){
        return axios.get(CLIENTE_BASE_REST_API_URL)
    }
    createCliente(cliente){
        return axios.post(CLIENTE_BASE_REST_API_URL,cliente)
    }
    getClienteById(clienteId){
        return axios.get(CLIENTE_BASE_REST_API_URL+'/'+clienteId)
    }
}

export default new ClienteService()