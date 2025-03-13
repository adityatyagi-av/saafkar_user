import TYPES from "../constants";

const initialState = {
    error: null,
    loading: true,
    userData:{},
    isAuthenticated:false,
    isOtpSent:false,
  };
// this reducer would be used at time of authenticat
  const userAuth = (state = initialState, action) => {
    switch (action.type) {
      case TYPES.SEND_OTP_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
          isAuthenticated:false,
          isOtpSent:false,
        };  
      case TYPES.SEND_OTP_SUCCESS:
        return {
            ...state,
            loading: false,
            error:null,
            isAuthenticated:true,
            isOtpSent:true,
        };
      case TYPES.SEND_OTP_FAILURE:
        return {
        ...state,
        loading:false,
        error:action.payload,
        isAuthenticated:false,
        isOtpSent:false,
        }
      default:
        return state;
    }
  };

  export default userAuth;