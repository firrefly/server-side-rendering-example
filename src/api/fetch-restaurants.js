// Modules
import urlJoin from "url-join";
// Lib
import { request } from "@lib/request";
import { getUrl } from "@lib/url";
// Utils
import { Consts } from "@utils";

const { GET_RESTAURANTS } = Consts.API;

export const fetchRestaurants = () => {
  const url = getUrl(GET_RESTAURANTS);
  // return request({ url })
  return url;
};
