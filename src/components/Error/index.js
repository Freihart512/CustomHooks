import "./style.css";
export default function ({ message }) {
  return (
    <div className="error-wrapper">
      <h1>Sorry...</h1>
      <img src="https://media.istockphoto.com/id/146750821/photo/pug-puppy-laying-down-with-a-sad-face.jpg?s=612x612&w=0&k=20&c=UCYrvido1QfP8mkLnvg719zlggksfYPG1pK5_hj-nwU=" />
      <p className="error-message">{message}</p>
    </div>
  );
}
