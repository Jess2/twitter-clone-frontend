export const initialState = {
  isLoggedIn: false,
  user: null,
  signupData: {},
  loginData: {},
};

// 액션 생성 함수
const LOG_IN = 'LOG_IN';
export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data
  }
}

const LOG_OUT = 'LOG_OUT';
export const logoutAction = () => {
  return {
    type: LOG_OUT,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state;
  }
};

export default reducer;