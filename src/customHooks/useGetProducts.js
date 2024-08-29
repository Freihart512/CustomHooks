import { useEffect, useState } from "react";
import useFetch from "./makeRequest";
import { formatProduct } from "./utils/formatters";

export default function useGetProducts() {
  const [products, setProducts] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [makeRequest, data, isLoading, error] = useFetch();

  function setFilter(value) {
    if (typeof value !== "string") {
      console.error("new Filter value is not a string", value);
      return;
    }
    setFilterText(value);
  }

  useEffect(() => {
    if (!Array.isArray(data)) {
      setProducts(null);
      return;
    }

    const formmatedProducts = data.reduce((list, unformattedProduct) => {
      const formattedProduct = formatProduct(unformattedProduct);
      if (
        formattedProduct &&
        (!setFilterText || formattedProduct.name.trim().startsWith(filterText))
      ) {
        list.push(formattedProduct);
      }
      return list;
    }, []);

    setProducts(formmatedProducts);
  }, [data, filterText, setProducts]);

  const getProducts = async () => {
    const url = "https://api.restful-api.dev/objects";
    //await makeRequest(url);
    setProducts([
      {
        id: "1",
        name: "Google Pixel 6 Pro",
        data: {
          color: "Cloudy White",
          capacity: "128 GB",
        },
      },
      {
        id: "2",
        name: "Apple iPhone 12 Mini, 256GB, Blue",
        data: null,
      },
      {
        id: "3",
        name: "Apple iPhone 12 Pro Max",
        data: {
          color: "Cloudy White",
          "capacity GB": 512,
        },
      },
      {
        id: "4",
        name: "Apple iPhone 11, 64GB",
        data: {
          price: 389.99,
          color: "Purple",
        },
      },
      {
        id: "5",
        name: "Samsung Galaxy Z Fold2",
        data: {
          price: 689.99,
          color: "Brown",
        },
      },
      {
        id: "6",
        name: "Apple AirPods",
        data: {
          generation: "3rd",
          price: 120,
        },
      },
      {
        id: "7",
        name: "Apple MacBook Pro 16",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      },
      {
        id: "8",
        name: "Apple Watch Series 8",
        data: {
          "Strap Colour": "Elderberry",
          "Case Size": "41mm",
        },
      },
      {
        id: "9",
        name: "Beats Studio3 Wireless",
        data: {
          Color: "Red",
          Description: "High-performance wireless noise cancelling headphones",
        },
      },
      {
        id: "10",
        name: "Apple iPad Mini 5th Gen",
        data: {
          Capacity: "64 GB",
          "Screen size": 7.9,
        },
      },
      {
        id: "11",
        name: "Apple iPad Mini 5th Gen",
        data: {
          Capacity: "254 GB",
          "Screen size": 7.9,
        },
      },
      {
        id: "12",
        name: "Apple iPad Air",
        data: {
          Generation: "4th",
          Price: "419.99",
          Capacity: "64 GB",
        },
      },
      {
        id: "13",
        name: "Apple iPad Air",
        data: {
          Generation: "4th",
          Price: "519.99",
          Capacity: "256 GB",
        },
      },
    ]);
  };

  return [getProducts, products, filterText, setFilter, isLoading, error];
}
