import { mapKeys } from 'lodash';
import { types } from '../actions';

const initialState={
  inventories:[],
  loading:false,
  error:""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
       return { ...state, inventories: action.payload };
      default:
      return {...state}
  }

  return state;
};
