import "./style.css";
import { useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/Table";
import useGetProducts from "../../customHooks/useGetProducts";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function Products() {
  const [getProducts, products, filterText, setFilterText, isLoading, error] =
    useGetProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-view-wrapper">
      {error && <Error message={error.message} />}
      {isLoading && <Loading hexColor="#6d6e6d" />}
      {false && (
        <>
          <div className="search-row">
            <SearchInput
              color="#bfbfbf"
              value={filterText}
              onChange={setFilterText}
            />
          </div>
          <Table products={products} />
        </>
      )}
    </div>
  );
}
