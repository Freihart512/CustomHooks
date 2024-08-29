export function formatProduct(unformattedProduct) {
  if (!unformattedProduct) {
    return null;
  }
  const formattedProduct = {
    _id: unformattedProduct.id,
    name: unformattedProduct.name,
    properties: unformattedProduct.data,
  };
  return formattedProduct;
}
