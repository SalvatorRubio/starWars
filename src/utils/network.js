import axios from "axios";

/**
 * Отправляет запрос AXIOS
 * @param {String} url - url для запроса
 * @returns {Object} - результат запроса
 */
export const getApiResource = (url) => {
  const res = axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.message);
      return false;
    });
  return res;
};

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return axios.get(res).then((res) => res.data);
    })
  );

  return res;
};
