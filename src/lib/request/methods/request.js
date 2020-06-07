// Modules
import { ajax } from "rxjs/ajax";
// Utils
import { Consts } from "@utils";
// Lib
import { withContentType } from "../enhance";

const { APPLICATION_JSON } = Consts.REQUEST.RESPONSE_TYPE;

const pipe = (...functions) => val => functions.reduce((currentVal, f) => f(currentVal), val);
const getRequest = (...enhancers) => pipe(...enhancers, ajax);
const request = getRequest(withContentType(APPLICATION_JSON));

export { request };
