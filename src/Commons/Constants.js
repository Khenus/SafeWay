import {Data} from '../Data';

export const initState = {
  userData: Data,
};

export function storeHandler(state = initState, action) {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return {
        userData: action.newUserData,
      };
    default:
      return state;
  }
}

export const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (newUserData) => {
      dispatch({type: 'UPDATE_USER_DATA', newUserData: newUserData});
    },
  };
};
