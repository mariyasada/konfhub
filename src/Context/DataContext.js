import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [pageData, setPageData] = useState(null);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
        );
        setLoading(false);
        console.log(data);
        setPageData(data);
      } catch {
        console.error("can't get data");
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        pageData,
        setPageData,
        isloading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);

export { useData, DataProvider };
