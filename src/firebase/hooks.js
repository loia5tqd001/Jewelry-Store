import { useState, useEffect } from 'react';

export const useGetFirebase = (initState, getFunction, ...getParameters) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initState);

  useEffect(() => {
    getFunction(...getParameters).then((snapshot) => {
      setIsLoading(false);
      setData(snapshot);
    });

    // add the spead parameter 'getParameters' to dependencies list will lead to memory leak:
    // https://stackoverflow.com/questions/59107782/react-useeffect-has-a-spread-element-in-its-dependency-array

    // see in the console.log in the case of having 'getParameters' as dependencies list to see the deference:
    // console.log('rerender');

    // disable the stupid warning:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFunction]);

  return { isLoading, data };
};
