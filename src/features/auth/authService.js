import { SERVER_URL } from '../../utils/consts';
import axios from 'axios';

const register = async (userData) => {

    const response = await axios.post(`${SERVER_URL}users`, userData); 
    if (response.data)
    AsyncStorage.setItem('user', JSON.stringify(response.data.data));
    return response.data.data

}

const logout = async () => {
    AsyncStorage.removeItem('user');
}


const login = async (userData) => {
    const response = await axios.post(`${SERVER_URL}users/login`, userData);

    if (response.data) {
        AsyncStorage.setItem('user', JSON.stringify(response.data.data));
    }

    return response.data.data;
}
const authService = {
    register,
    logout,
    login
}

export default authService;