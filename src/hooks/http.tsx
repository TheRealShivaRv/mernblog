import { useState } from "react";
import { AuthRequestConfig, FetchedData, RequestConfig } from "../declarations";

const initialFetchedData: FetchedData = {
  isError: false,
  status: 0,
  data: null,
  error: "",
};

// const hookReducer = (state: FetchedData, actions: any) => {
//   let updatedState: FetchedData;
//   switch (actions.type) {
//     default:
//       updatedState = { ...state };
//       break;
//   }
//   return updatedState;
// };

const headerGenerator = (headers: any, token?: string | null | undefined) => {
  const header = new Headers();
  header.set('Content-type', 'application/json');
};

const useHttp = (
  successHandler: (data: FetchedData) => any,
  errorHandler: (data: FetchedData) => any
) => {
  const [retrievedData, dispatchOutput] = useState<FetchedData>(initialFetchedData);

  const sendRequest = async (config: RequestConfig | AuthRequestConfig) => {
    try {
      const res = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: { "Content-type": "application/json", ...config.headers },
        body: config.body ? config.body : null,
      });
      const status = res.status;
      const data = await res.json();
      const output: FetchedData = {
        isError: false,
        status,
        data,
        error: null      
      };
      dispatchOutput(output)

    } catch (err: any) {}
  };

  return {
    sendRequest,
    retrievedData,
  };
};

export default useHttp;