import axios from "axios"

export const getAllUsers = async (nat: string, gender: string): Promise<any> => {
    return (await axios.get(`https://randomuser.me/api/?page=5&results=10&nat=${nat}&gender=${gender}`)).data
}