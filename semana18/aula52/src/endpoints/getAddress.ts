import axios from "axios"

const getAddress = async (cep: string): Promise<any>=>{
    let address: object={} 
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>{
        const {logradouro, bairro, localidade, uf} = res.data 
        address = {logradouro, bairro, localidade, uf}
    })
    .catch((err)=>console.log(err))
    return address
}
export default getAddress;