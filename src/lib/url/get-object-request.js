// Modules
import { defaults } from "lodash";
// Utils
import { Consts } from "@utils";

const { REQUEST } = Consts;

const DEFAULT_REQUEST_OBJECT = {
  endpoints: [],
  params: [],
  method: REQUEST.METHODS.POST,
  responseType: REQUEST.RESPONSE_TYPE.JSON,
  headers: {},
  body: {},
};

export const getObjectRequest = (options = {}) => defaults(options, DEFAULT_REQUEST_OBJECT);
