import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
          try {
            const response = await fetch(baseUrl + url);
            if (response.ok) {
                const json = await response.json();
                setData(json);
            } else {
                throw response;
            }
          } catch (err) {
            console.log(err)
          } finally {
            setLoading(false)
          }
      }
    
        init();
      }, [url]);


      return {
          data, loading
      };
}