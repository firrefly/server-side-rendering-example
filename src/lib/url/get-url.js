// Modules
import urlJoin from "url-join";
// Utils
import { Consts } from "@utils";

const { PROTOCOL, HOST, PREFIX, VERSION } = Consts.REQUEST.OPTIONS;

export const getUrl = (endpoint = "", params = "") => {
  const link = `${PROTOCOL}://${HOST}`;
  return urlJoin(link, PREFIX, VERSION, endpoint, params);
};
