import TYPES from '../constants';

const initialState = {
  error: null,
  loading: false,
  carData: {},
  companyData: {},
  userCarData: {},
  homeLocation: {},
  officeLocation: {},
};
// this reducer would be used at time of authenticat
const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_CAR_COMPANIES_LOADING:
    case TYPES.FETCH_USER_CAR_LOADING:
    case TYPES.FETCH_CAR_BY_COMPANY_LOADING:
    case TYPES.CREATE_USER_CAR_LOADING:
    case TYPES.FETCH_ADDRESS_LOADING:
    case TYPES.ADD_ADDRESS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPES.FETCH_USER_CAR_SUCCESS:
    case TYPES.FETCH_USER_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userCarData: action.payload,
      };
    case TYPES.FETCH_CAR_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        companyData: action.payload,
      };
    case TYPES.FETCH_CAR_BY_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        carData: action.payload,
      };
    case TYPES.FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        homeLocation: action.payload.homeLocation,
        officeLocation: action.payload.officeLocation,
      };
    case TYPES.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case TYPES.FETCH_USER_CAR_FAILURE:
    case TYPES.FETCH_CAR_COMPANIES_FAILURE:
    case TYPES.FETCH_CAR_BY_COMPANY_FAILURE:
    case TYPES.ADD_ADDRESS_FAILURE:
    case TYPES.FETCH_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default carReducer;
