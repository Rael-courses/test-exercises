import axios from "axios";

export async function httpGet(url: string): Promise<unknown> {
  return axios.get(url).then((response) => response.data);
}
