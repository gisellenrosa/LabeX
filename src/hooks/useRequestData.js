import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (url, initialState, headers) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url, headers)
      .then((res) => setData(res.data.trips))
      .catch((err) => console.log(err));
  }, [url]);

  return data;
};

export default useRequestData;
