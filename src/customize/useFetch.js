//useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get(url, { cancelToken: source.token })
            .then(res => {
                setIsLoading(false);
                setIsError(false);
                //checking for multiple responses for more flexibility 
                //with the url we send in.
                res.data && setData(res.data);
            })
            .catch(err => {
                setIsLoading(false)
                setIsError(true)
            })
        return () => {
            source.cancel();
        }
    }, [url])

    return { data, isLoading, isError }

}

export default useFetch;