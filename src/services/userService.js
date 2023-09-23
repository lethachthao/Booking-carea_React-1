import axios from "../axios"

 const handleLoginApi = async (userEmail, userPassword) =>{
    return await axios.post('/api/login',  { email: userEmail, password :userPassword})
}

const getAllUsers = (inputId) =>{
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};


// ---------------------------crud redux----------------

const getAllCodeService = (inputType) =>{
  return axios.get(`/api/allcode?type=${inputType}`);
}


export { handleLoginApi, getAllUsers, createNewUserService, getAllCodeService };

