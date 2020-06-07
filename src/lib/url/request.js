// Utils API
import { getUrl } from "./get-url";
import { getObjectRequest } from "./get-object-request";

export const request = options => {
  const objOptions = getObjectRequest(options);
  const { endpoints, params } = objOptions;
  const url = getUrl(endpoints, params);

  return url;
};
