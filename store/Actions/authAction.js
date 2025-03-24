import api from '../../services/api';
import {clearTokens, getTokens, storeTokens} from '../../services/tokenService';
import {BASE_URL} from '../../src/ApiBaseUrl/ApiBaseUrl';
import {
  SEND_OTP,
  UPDATE_EMAIL,
  VERIFY_OTP,
} from '../../src/ApiEndPoints/ApiEndPoints';
import TYPES from '../constants';
import axios from 'axios';
export const sendOtp = (nationalCode, phone) => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.SEND_OTP_LOADING});
      const response = await axios.post(`${BASE_URL}${SEND_OTP}`, {
        phone,
        nationalCode,
      });
      if (response?.status === 201) {
        dispatch({
          type: TYPES.SEND_OTP_SUCCESS,
          payload: phone,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.SEND_OTP_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
     
      dispatch({
        type: TYPES.SEND_OTP_FAILURE,
        error: error.message,
      });
    }
  };
};
export const backFromOtp = () => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.SEND_OTP_AGAIN});
    } catch (error) {
      dispatch({
        type: TYPES.SEND_OTP_FAILURE,
        error: error.message,
      });
    }
  };
};
export const verifyOtp = (phone, otp) => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.VERIFY_OTP_LOADING});

      const response = await axios.post(`${BASE_URL}${VERIFY_OTP}`, {
        phone,
        otp,
      });
      if (response?.status === 200) {
        await storeTokens({
          accessToken: response?.data?.data?.accessToken,
          refreshToken: response?.data?.data?.refreshToken,
        });
        dispatch({
          type: TYPES.VERIFY_OTP_SUCCESS,
          payload: response?.data?.data,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.VERIFY_OTP_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: TYPES.VERIFY_OTP_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateEmailAndPhone = (name, email) => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.UPDATE_EMAIL_LOADING});
      const response = await api.post(`${BASE_URL}${UPDATE_EMAIL}`, {
        name,
        email,
      });
      if (response?.status === 200) {
        dispatch({
          type: TYPES.UPDATE_EMAIL_SUCCESS,
          payload: response?.data?.data,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.UPDATE_EMAIL_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      dispatch({type: TYPES.LOGOUT_SUCCESS});
      dispatch({
        type: TYPES.UPDATE_EMAIL_FAILURE,
        error: error.message,
      });
    }
  };
};

export const handleLogout = () => {
  return async dispatch => {
    try {
await clearTokens();
      dispatch({type: TYPES.LOGOUT_SUCCESS});
    } catch (error) {
      console.log(error);
    }
  };
};
