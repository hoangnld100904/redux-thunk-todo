// const initState = {
//     search: "",
//     status: "All",
//     priorities: [],
// }
// const FilterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       }
//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       }
//     default:
//       return state;
//   }
// };
// export default FilterReducer;

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    //Cái này là một action creators
    searchFilterChange: (state, action) => {
      //Có thể viết code mutation, thao tác trực tiếp lên state
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
