// Modules
import { isObject, isNil } from "lodash";
// Utils
import { Consts } from "@utils";

const { HEADERS, RESPONSE_TYPE } = Consts.REQUEST;
const { APPLICATION_JSON } = RESPONSE_TYPE;
const { ACCEPT, CONTENT_TYPE } = HEADERS;

export const withContentType = (type = APPLICATION_JSON) => requestData => {
  const requestDataObj = requestData;

  if (!isObject(requestDataObj) || isNil(requestDataObj)) {
    return requestDataObj;
  }

  const patch = {
    [ACCEPT]: type,
    [CONTENT_TYPE]: type,
  };

  requestDataObj.headers = requestData.headers ? { ...requestDataObj.headers, ...patch } : patch;

  return requestDataObj;
};
