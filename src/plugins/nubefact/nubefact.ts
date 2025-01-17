import axios, { AxiosError } from "axios";
import { GuideTransportNubefact } from "../../domain/interfaces/guide-transport-nubefact";
import { envs } from "../env-var/envs";

const nubefact = {
  saveGRT: async (grt: GuideTransportNubefact) => {
    const endpoint = envs.API_NUBEFACT ?? "";
    const token = envs.TOKEN_NUBEFACT;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
    };
    try {
      const response = await axios.post(endpoint, grt, { headers });
      console.log(response.data);
      return grt;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data?.errors;
      } else {
        throw error;
      }
    }
  },
};

export { nubefact };
