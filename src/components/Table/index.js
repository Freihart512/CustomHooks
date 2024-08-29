import "./style.css";

function Properties({ properties }) {
  if (!properties) {
    return null;
  }
  return (
    <ul>
      {Object.Keys(properties).map((key) => (
        <li>
          {key}: {properties[key]}
        </li>
      ))}
    </ul>
  );
}

function Rows({ products }) {
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
    <tr key={p._id}>
      <td>
        <strong>{p._id}</strong>
      </td>
      <td>{p.name}</td>
      <td>
        <Properties properties={p.properties} />
      </td>
    </tr>
  ));
}

export default function ({ products }) {
  if (!Array.isArray(products)) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>
        <Rows products={products} />
      </tbody>
    </table>
  );
}
