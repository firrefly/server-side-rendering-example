export const Consts = {
  ACTIONS: {
    PREFIX: "@",
  },

  API: {
    GET_RESTAURANTS: "/restaurants",
    GET_REVIEWS: "/reviews",
    GET_HITS: "/hits",
  },

  DEBOUNCE: {
    SEARCH_MS: 300,
  },

  // --> IT'S HARD CODE!!!
  FILTERS: {
    OPTIONS_FILTER: [
      {
        id: "DeliveryCost",
        type: "options",
        name: "Бесплатная доставка",
        checked: false,
      }
    ],
    FOOD_FILTERS: [
      {
        id: "pizza",
        type: "food",
        name: "Пицца",
        checked: false,
      },
      {
        id: "sushi",
        type: "food",
        name: "Суши",
        checked: false,
      },
      {
        id: "burgers",
        type: "food",
        name: "Бургеры",
        checked: false,
      },
      {
        id: "pies",
        type: "food",
        name: "Пироги",
        checked: false,
      },
    ],
  },
  // <-- IT'S HARD CODE!!!

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
