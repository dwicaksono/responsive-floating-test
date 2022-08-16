import axios from "axios";

export const fetcher = async (url, headers) => {
  let header = {
    ...headers,
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };
  let { data } = await axios.request(header);
  return data;
};

export const download = async (url, filename) => {
  fetcher(url, { method: "GET" })
    .then((res) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([res]));
      link.setAttribute("download", `${filename}.pdf`);
      document.body.appendChild(link);
      link.click();
    })
    .catch((err) => {
      console.log(err);
    });
};
