import { restaurantsInitialState } from "@state/restaurants";
import { reviewsInitialState } from "@state/reviews";
import { hitsInitialState } from "@state/hits";

export const initialState = {
  restaurants: restaurantsInitialState,
  reviews: reviewsInitialState,
  hits: hitsInitialState,
};
