import {Login} from '../actionType';

const initialState = {
  logins: []
}

const Meals = (state = initialState, action) => {
  switch(action.type) {
    case Login: {
      const { content } = action.payload;
      return {
        logins: [
          ...state.logins,
          { content }
        ]
      }
    }

    default: {
      return state;
    }
  }
}

export default Meals;
