/* Action Types */
const FILTERS_STATUSFILTERCHANGED = "filters/statusFilterChanged";
const FILTERS_COLORFILTERCHANGED = "filters/colorFilterChanged";

/* Action Creators */
export const changeStatusFilterAction = (status) => ({ type: FILTERS_STATUSFILTERCHANGED, payload: { status } });
export const changeColorFilterAction = (color, changeType) => ({
  type: FILTERS_COLORFILTERCHANGED,
  payload: { color, changeType },
});

/* Initial State */
const initialState = { status: "all", colors: [] };

/* Reducer */
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_STATUSFILTERCHANGED:
      return { ...state, status: action.payload.status };

    case FILTERS_COLORFILTERCHANGED:
      if (action.payload.changeType === "add" || action.payload.changeType === true) {
        return { ...state, colors: [...state.colors, action.payload.color] };
      } else {
        return { ...state, colors: state.colors.filter((color) => color !== action.payload.color) };
      }
    default:
      return state;
  }
};

export default filtersReducer;
