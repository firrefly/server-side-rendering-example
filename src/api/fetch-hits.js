// Modules
import urlJoin from "url-join";
// Lib
import { request } from "@lib/request";
import { getUrl } from "@lib/url";
// Utils
import { Consts } from "@utils";

const { GET_HITS } = Consts.API;

export const fetchHits = () => {
  const url = getUrl(GET_HITS);
  // return request({ url })
  return url;
};
