import axios from "axios"
import { info } from "console"

export const getAllUsers = async (nat: string, gender: string): Promise<{results: Array<any>, info: any}> => {
    return (await axios.get(`https://randomuser.me/api/?page=5&results=10&nat=${nat}&gender=${gender}`)).data
}