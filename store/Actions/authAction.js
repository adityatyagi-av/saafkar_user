import {BASE_URL} from '../../src/ApiBaseUrl/ApiBaseUrl';
import {SEND_OTP} from '../../src/ApiEndPoints/ApiEndPoints';
import TYPES from '../constants';
import axios from 'axios';
export const sendOtp = (nationalCode, phone) => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.SEND_OTP_LOADING});
      console.log("heeloo",nationalCode,phone,`${BASE_URL}${SEND_OTP}`)
      const response = await axios.post(`${BASE_URL}${SEND_OTP}`, {
        phone,
        nationalCode,
      });
      console.log(response)
      if (response?.status === 201) {
        dispatch({
          type: TYPES.SEND_OTP_SUCCESS,
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
