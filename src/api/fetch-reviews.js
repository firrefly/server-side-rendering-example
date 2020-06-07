// Modules
import urlJoin from "url-join";
// Lib
import { request } from "@lib/request";
import { getUrl } from "@lib/url";
// Utils
import { Consts } from "@utils";

const { GET_REVIEWS } = Consts.API;

export const fetchReviews = () => {
  const url = getUrl(GET_REVIEWS);
  // return request({ url })
  return url;
};
