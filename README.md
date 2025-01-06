## HEADING
 this app is for beginer level try create mobile app with multifactor authentifiction using React Native and Nodejs


## INSTRUCTION
install NODE in your machine 
install expo in your phone and or use simulator
start by installing all  the packages by( npm install)
finall excute by write npm start or npm start android.

...


##databse 
incase of database have use mongoDb and Nodejs for the backend 
refers the model folder and server.js file for connection with server





for more info contact me with johnpetro335@gmail.com

##for sessoion


import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

// Save session token securely
const saveSessionToken = async (token) => {
  try {
    await SecureStore.setItemAsync('sessionToken', token);
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

// Retrieve session token
const getSessionToken = async () => {
  try {
    return await SecureStore.getItemAsync('sessionToken');
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

// Example: Axios setup with token
const setupAxios = async () => {
  const token = await getSessionToken();
  const axiosInstance = axios.create({
    baseURL: 'https://your-api.com',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosInstance;
};
