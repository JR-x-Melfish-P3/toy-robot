import type { AxiosResponse } from "axios";

const getAuthToken = async (callback: () => Promise<AxiosResponse>) => {
  const res = await callback();
  return res.headers["X-Auth-Token"];
};

export default getAuthToken;
