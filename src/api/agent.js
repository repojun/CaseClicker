// all calls will go through this class
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default async function Axios(
  url,
  method = "GET",
  data = {},
  headers = {}
) {
  // sends to server.js then routes folder, looks for respective methods
  const query = await client({
    method,
    url,
    data,
    headers: {
      // ...{Authorization: `${process.env.API_AUTH_TOKEN}`},
      ...headers,

    },
    timeout: 5000,
    signal: AbortSignal.timeout(5000), // if longer than 5 seconds we abort
  });

  return query.status === 200 && (query.data || true); // if we get status 200, we return true or the data requested
}
