import axios from "axios"

export const getAllUsers = async (nat: string, gender: string): Promise<{results: Array<any>, info: any}> => {
    return (await axios.get(`https://randomuser.me/api/?results=200&nat=${nat}&gender=${gender}`)).data
}