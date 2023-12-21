import { URL, ROUTE, METHOD, TEXT_SERVER_ERROR } from './const.js';

const load = (route, errorText, method = METHOD.GET, body = null) =>
  fetch(`${URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(ROUTE.GET_DATA, TEXT_SERVER_ERROR.GET_DATA);

const sendData = (body) => {
  load(ROUTE.SEND_DATA, TEXT_SERVER_ERROR.POST_DATA, METHOD.POST, body);
};

export { getData, sendData };
