import TYPES from '../constants';

const initialState = {
  error: null,
  loading: false,
  userData: {},
  isAuthenticated: false,
  isOtpSent: false,
  mobileNumber: null,
  userDetailSetFlag: false,
};
// this reducer would be used at time of authenticat
const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SEND_OTP_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthenticated: false,
        isOtpSent: false,
        userData: {},
      };
    case TYPES.VERIFY_OTP_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthenticated: false,
        isOtpSent: true,
        userData: {},
      };
    case TYPES.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthenticated: true,
        isOtpSent: true,
        userData: action.payload?.updatedUser,
        userDetailSetFlag: action.payload.userDetailSetFlag,
      };
    case TYPES.SEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isOtpSent: true,
        mobileNumber: action.payload,
      };
    case TYPES.VERIFY_OTP_FAILURE:
    case TYPES.SEND_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        isOtpSent: false,
        userData: {},
      };
    case TYPES.SEND_OTP_AGAIN:
      return {
        ...state,
        isOtpSent: false,
        loading: false,
        isAuthenticated: false,
        error: null,
        userData: {},
        userDetailSetFlag: false,
      };
    case TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        userData: {},
        isAuthenticated: false,
        isOtpSent: false,
        mobileNumber: null,
        userDetailSetFlag: false,
      };
    default:
      return state;
  }
};

export default userAuth;
