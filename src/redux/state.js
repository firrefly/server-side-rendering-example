import { restaurantsInitialState } from "@state/restaurants";
import { reviewsListInitialState } from "@state/reviews";
import { hitsInitialState } from "@state/hits";

export const initialState = {
  restaurants: restaurantsInitialState,
  reviews: reviewsListInitialState,
  hits: hitsInitialState,
};
