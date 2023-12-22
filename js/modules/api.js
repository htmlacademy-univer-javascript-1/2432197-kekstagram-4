import { URL, Route, Method, ServerErrorText } from './const.js';

const load = (route, errorText, method = Method.GET, body = null) =>
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

const getData = () => load(Route.GET_DATA, ServerErrorText.GET_DATA);

const sendData = (body) => {
  load(Route.SEND_DATA, ServerErrorText.POST_DATA, Method.POST, body);
};

export { getData, sendData };
