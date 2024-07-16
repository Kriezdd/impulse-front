const baseURL = "https://api.telegram.org/bot7305127895:AAHkW4rJZbIrYhZARHeKvaqBVBLEalMha1A/";

export const sendMessage = async (message) => {
  const url = `${baseURL}sendMessage?chat_id=-4237750269&text=${message}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: "7305127895",
      text: message,
    }),
  });
  const data = await response.json();
  return data;
}