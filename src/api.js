import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081'; 

export const fetchServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const fetchAvailableRequests = async (email) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getRequests`, {
        params: {
          email: email
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching available requests:', error);
      throw error;
    }
};

export const fetchSavedRequests = async (email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getRequests`, {
      params: {
        email: email
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching available requests:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
    try {
      await axios.post(`${API_BASE_URL}/register`, userData);
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
};

export const getUserInfo = async (email) => {
  try {
    console.log(email)
    const response = await axios.get(`${API_BASE_URL}/getUser`, {
      params: { email }, 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

// api.js (or any appropriate file)
export async function updateUserInfo(data) {
  try {
    console.log(data);
    const response = await axios.put(`${API_BASE_URL}/updateUser`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return true; // API call successful
    } else {
      return false; // API call failed
    }
  } catch (error) {
    console.error('Error updating user:', error);
    return false; // API call failed due to an error
  }
}

export const createRequest = async (requestData) => {
  try {
      const response = await axios.post(`${API_BASE_URL}/createRequest`, requestData);
      if (response.status === 200) {
          return true; // Request successful
      } else {
          return false; // Request failed
      }
  } catch (error) {
      console.error(error);
      return false; // Request failed
  }
};

export const getAvailableRequests = async (email) => {
  try {
      if (!email) {
          throw new Error('Email parameter is missing');
      }

      const response = await axios.get(`${API_BASE_URL}/getRequests`, {
          params: {
              email: email,
          },
      });

      if (response.status === 200) {
          return response.data;
      } else {
          throw new Error('Failed to fetch available requests');
      }
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const getSavedRequests = async (email) => {
  try {
      if (!email) {
          throw new Error('Email parameter is missing');
      }

      const response = await axios.get(`${API_BASE_URL}/getSavedJob`, {
          params: {
              email: email,
          },
      });

      if (response.status === 200) {
          return response.data;
      } else {
          throw new Error('Failed to fetch available requests');
      }
  } catch (error) {
      console.error(error);
      return null;
  }
};

//client's job posts
export async function fetchUserRequests(email) {
  try {
    const response = await axios.get(`${API_BASE_URL}/userJobPosts`, {
      params: {
        email: email
      }
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
}

//worker applying for a job
export async function approveApplication(applicationID, email) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/approve?applicationID=${applicationID}`,
      { email: email }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

//client accepting a proposal
export async function acceptApplication(applicationID, approvalID) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/accept`,
      { applicationID, approvalID }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

//client rejecting a proposal
export async function rejectApplication(applicationID, approvalID) {
  try {
    const response = await axios.post(`${API_BASE_URL}/reject`, {
      applicationID,
      approvalID,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}


//find all the rooms of a user
export async function getUserMessages(email) {
  try {
    const response = await axios.post(`${API_BASE_URL}/userMessages`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

//fetch chat between two users
export async function getMessage(messageRoomUID) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getMessage`, {
      messageRoomUID: messageRoomUID,
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
}

//user wants to send a message
export const sendMessage = async (roomID, email, message) => {
  try {
      const response = await axios.post(`${API_BASE_URL}/sendMessage`, {
          roomID: roomID,
          email: email,
          message: message
      });

      if (response.status === 200) {
          return true; // Message sent successfully
      } else {
          return false; // Message sending failed
      }
  } catch (error) {
      console.error('Error sending message:', error);
      return false; // Message sending failed
  }
};