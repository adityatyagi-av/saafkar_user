import api from '../../services/api';
import {BASE_URL} from '../../src/ApiBaseUrl/ApiBaseUrl';
import {
  ADD_ADDRESS,
  CREATE_USER_CAR,
  FETCH_ADDRESS,
  FETCH_CAR_BY_COMPANY,
  FETCH_CAR_COMPANIES,
  FETCH_USER_CARS,
} from '../../src/ApiEndPoints/ApiEndPoints';
import TYPES from '../constants';

export const fetchUserCars = () => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.FETCH_USER_CAR_LOADING});
      const response = await api.get(`${BASE_URL}${FETCH_USER_CARS}`);
      if (response?.status === 200) {
        dispatch({
          type: TYPES.FETCH_USER_CAR_SUCCESS,
          payload: response?.data?.data?.userCars,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.FETCH_USER_CAR_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.FETCH_USER_CAR_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchCarCompanies = () => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.FETCH_CAR_COMPANIES_LOADING});
      const response = await api.get(`${BASE_URL}${FETCH_CAR_COMPANIES}`);
      if (response?.status === 200) {
        dispatch({
          type: TYPES.FETCH_CAR_COMPANIES_SUCCESS,
          payload: response?.data?.data,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.FETCH_CAR_COMPANIES_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.FETCH_CAR_COMPANIES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchCarByCompany = id => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.FETCH_CAR_BY_COMPANY_LOADING});
      const response = await api.get(
        `${BASE_URL}${FETCH_CAR_BY_COMPANY}/${id}`,
      );
      if (response?.status === 200) {
        dispatch({
          type: TYPES.FETCH_CAR_BY_COMPANY_SUCCESS,
          payload: response?.data?.data?.cars,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.FETCH_CAR_BY_COMPANY_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.FETCH_CAR_BY_COMPANY_FAILURE,
        error: error.message,
      });
    }
  };
};

export const createUserCar = carId => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.CREATE_USER_CAR_LOADING});
      const response = await api.post(`${BASE_URL}${CREATE_USER_CAR}`, {
        carId: carId,
      });
      if (response?.status === 200) {
        dispatch({
          type: TYPES.CREATE_USER_CAR_SUCCESS,
          payload: response?.data?.data?.userCars,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.CREATE_USER_CAR_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.CREATE_USER_CAR_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchAddress = () => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.FETCH_ADDRESS_LOADING});
      const response = await api.get(`${BASE_URL}${FETCH_ADDRESS}`);
      if (response?.status === 200) {
        dispatch({
          type: TYPES.FETCH_ADDRESS_SUCCESS,
          payload: response?.data?.data?.user,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.FETCH_ADDRESS_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.FETCH_ADDRESS_FAILURE,
        error: error.message,
      });
    }
  };
};

export const addAddress = address => {
  return async dispatch => {
    try {
      console.log(address, 'address');
      dispatch({type: TYPES.ADD_ADDRESS_LOADING});
      const response = await api.post(`${BASE_URL}${ADD_ADDRESS}`, {
        name: address?.name,
        houseNumber: address?.houseNumber,
        streetName: address?.streetName,
        locality: address?.locality,
        city: address?.city,
        state: address?.state,
        pincode: address?.pinCode,
      });
      if (response?.status === 200) {
        dispatch({
          type: TYPES.ADD_ADDRESS_SUCCESS,
        });
        return true;
      } else {
        dispatch({
          type: TYPES.ADD_ADDRESS_FAILURE,
          error: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.ADD_ADDRESS_FAILURE,
        error: error.message,
      });
    }
  };
};
