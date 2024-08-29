import "./style.css";

export default function ({ prductId }) {
  return (
    <div className="product-card-wrapper">
      <img src="https://picsum.photos/200/300" />
      <div className="product-card-info"></div>
    </div>
  );
}
