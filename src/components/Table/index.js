import "./style.css";

function Rows({ products, onSelectProduct }) {
  if (products.length < 1) {
    return (
      <tr key="empty-list">
        <td colSpan="3" className="empty-row">
          no items to show
        </td>
      </tr>
    );
  }

  return products.map((p) => (
    <tr
      key={p._id}
      onClick={() => {
        console.log("Esta cossaaa", p);
        onSelectProduct(p);
      }}
    >
      <td>
        <strong>{p._id}</strong>
      </td>
      <td>{p.name}</td>
      <td>$ {p.price}</td>
    </tr>
  ));
}

export default function ({ products, onSelectProduct }) {
  if (!Array.isArray(products)) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Rows products={products} onSelectProduct={onSelectProduct} />
      </tbody>
    </table>
  );
}
