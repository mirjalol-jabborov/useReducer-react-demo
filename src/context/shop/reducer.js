import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "./types";

export const shopReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };

    case REMOVE_PRODUCT:
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case UPDATE_PRODUCT:
      const productId = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
        state.products[productId] = action.payload
        console.log(state);
        return state;
    }
};
