export const initialState = {
  basket: [],
  user: null,
};

export const basketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.title === action.title
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.title} as its not in basket)`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};
