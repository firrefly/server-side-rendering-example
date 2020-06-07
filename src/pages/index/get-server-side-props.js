// Modules
import fetch from "node-fetch";
// Api
import { fetchRestaurants, fetchReviews, fetchHits } from "@api";
// Actions
import { restaurantsSave, restaurantsSuccess } from "actions/restaurants";
import { reviewsSave, reviewsSuccess } from "actions/reviews";
import { hitsSave, hitsSuccess } from "actions/hits";
// Store
import { makeStoreWrapper } from "@redux";

export const getServerSideProps = makeStoreWrapper.getServerSideProps(
  async({ store }) => {
    const getRestaurants = await fetch(fetchRestaurants());
    const restaurants = await getRestaurants.json();
    store.dispatch(restaurantsSave(restaurants));
    store.dispatch(restaurantsSuccess());

    const getReviews = await fetch(fetchReviews());
    const reviews = await getReviews.json();
    store.dispatch(reviewsSave(reviews));
    store.dispatch(reviewsSuccess());

    const getHits = await fetch(fetchHits());
    const hits = await getHits.json();
    store.dispatch(hitsSave(hits));
    store.dispatch(hitsSuccess());
  }
);
