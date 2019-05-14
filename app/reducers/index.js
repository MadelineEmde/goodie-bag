import axios from "axios";

const initialState = {
  candies: []
};

/// action types
const GET_ALL_CANDIES = "GET_ALL_CANDIES";

//action creators

export const getAllCandies = candies => ({
  type: GET_ALL_CANDIES,
  candies
});

export const fetchCandiesThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/candies");
      dispatch(getAllCandies(data));
    } catch (err) {
      console.log("ERROR", err);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES: {
      return { ...state, candies: [...action.candies] };
    }
    default:
      return state;
  }
};

export default rootReducer;
