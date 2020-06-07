// Modules
import fetch from "node-fetch";
// Api
import { fetchRestaurants } from "@api";
// Actions
import { restaurantsSave, restaurantsSuccess } from "actions/restaurants";
// Store
import { makeStoreWrapper } from "@redux";

export const getServerSideProps = makeStoreWrapper.getServerSideProps(
  async({ store }) => {
    const getRestaurants = await fetch(fetchRestaurants());
    const restaurants = await getRestaurants.json();
    store.dispatch(restaurantsSave(restaurants));
    store.dispatch(restaurantsSuccess());
  }
);
