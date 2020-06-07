export const Consts = {
  ACTIONS: {
    PREFIX: "@",
  },

  API: {
    GET_RESTAURANTS: "/restaurants",
    GET_REVIEWS: "/reviews",
    GET_HITS: "/hits",
  },

  FILTERS: {
    FILTERS_NAME: [
      "Бесплатная доствка",
      "Пицца",
      "Суши",
      "Бургеры",
      "Пироги",
    ],
  },

  REQUEST: {
    HEADERS: {
      ACCEPT: "Accept",
      AUTHORIZATION: "Authorization",
      CONTENT_TYPE: "Content-Type",
    },

    OPTIONS: {
      PROTOCOL: "HTTPS",
      HOST: "front-task.chibbistest.ru",
      PREFIX: "api",
      VERSION: "v1",
      MIN_WAIT: 2000,
      MAX_WAIT: 3000,
    },

    METHODS: {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
      DELETE: "DELETE",
    },

    RESPONSE_TYPE: {
      APPLICATION_JSON: "application/json",
      CODE: "Code",
      JSON: "json",
      BLOB: "blob",
    },

    UI: {
      STATUS: {
        IDLE: "idle",
        PENDING: "pending",
        SUCCESS: "success",
        ABORT: "abort",
        ERROR: "error",
        EMPTY: "empty",
      },
    },

    XHR: {
      RESPONSE: "response",
    },
  },
};
