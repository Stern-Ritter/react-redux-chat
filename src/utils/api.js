const config = {
  firebaseBaseUrl: "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",
  firebaseCollection: "messages.json",
};

function checkResponse(res, type) {
  const status = res.ok;
  const contentType = res.headers.get("content-type");
  if (status && contentType.includes(type)) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export { config, checkResponse };
