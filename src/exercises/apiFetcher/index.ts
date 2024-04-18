import axios from "axios";

export async function fetchApi(url: string): Promise<unknown> {
  return axios.get(url).then((response) => {
    return response.data;
  });
}
