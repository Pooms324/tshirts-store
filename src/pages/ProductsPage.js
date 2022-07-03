import { useEffect, useState } from "react";
import TShirts from "../components/tshirtfiles/TShirts";
import Loading from "../components/uiElements/Loading";
import httpHook from "../hook/httphook";
import "./productsPage.css";
const ProductPage = () => {
  const [loadedTShirtsData, setLoadedTshirtsData] = useState([]);
  const { sendRequest, loading, error } = httpHook();
  useEffect(() => {
    const transformFunc = (tshirtsData) => {
      const transformedTshirtData = [];
      for (let tshirt in tshirtsData) {
        transformedTshirtData.push({
          id: tshirt,
          ...tshirtsData[tshirt],
        });
      }
      setLoadedTshirtsData(transformedTshirtData);
    };
    sendRequest(
      {
        url: `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`,
      },
      transformFunc
    );
  }, [sendRequest]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="err_text">{error}</p>;
  }
  return (
    <div className="products_page">
      <TShirts tshirts={loadedTShirtsData} />
    </div>
  );
};

export default ProductPage;
