import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// 리듀서 : 이전 상태와 액션으로 다음 상태를 만들어낸다.
const rootReducer = combineReducers({
  // For SSR
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;