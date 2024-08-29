export function formatProduct(unformattedProduct) {
  if (!unformattedProduct) {
    return null;
  }
  const formattedProduct = {
    _id: unformattedProduct.id,
    name: unformattedProduct.name,
    properties: unformattedProduct.data,
    img: "https://picsum.photos/200/300",
  };
  return formattedProduct;
}
