import "./style.css";
import useGetProduct from "../../customHooks/useGetProduct";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useState } from "react";

function Property(value) {
  return (
    <div className="property-wrapper">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="15px"
          width="15px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 47.94 47.94"
          xmlSpace="preserve"
        >
          <path
            style={{ fill: "#f5ea95" }}
            d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"
          />
        </svg>
      </div>
      <div className="property-value">{value}</div>
    </div>
  );
}

export default function ({ productId }) {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isErrorImage, setIsErrorImage] = useState(false);
  const [_, product, isLoading, error] = useGetProduct(productId);

  const onLoadImage = (isError) => {
    setIsLoadingImage(false);
    if (isError) {
      setIsErrorImage(triue);
    }
  };

  return (
    <>
      {error && <Error message={error.message} />}
      {(isLoading || isLoadingImage) && <Loading hexColor="#6d6e6d" />}
      {product && (
        <div className="product-card-wrapper">
          {!isErrorImage && (
            <img
              src="https://picsum.photos/200/300"
              onLoad={() => onLoadImage()}
              onError={() => onLoadImage(true)}
            />
          )}
          {isErrorImage && (
            <img src="https://media.istockphoto.com/id/146750821/photo/pug-puppy-laying-down-with-a-sad-face.jpg?s=612x612&w=0&k=20&c=UCYrvido1QfP8mkLnvg719zlggksfYPG1pK5_hj-nwU=" />
          )}

          <div className="product-card-info">
            <h1>{product.name}</h1>
            <p className="product-card-description">{product.description}</p>
            {product.properties.map((p) => (
              <Property value={p} />
            ))}
            <div> $ {product.price}</div>
          </div>
        </div>
      )}
    </>
  );
}
