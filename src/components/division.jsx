import image2 from "../assets/images/desktop/image-interactive.jpg";
import "../styles/main.scss";

function Division() {
  return (
    <>
      <div className="division">
        <div className="imagen">
          <img src={image2} alt="img" />
        </div>
        <div className="texto">
          <h2>THE LEADER IN INTERACTIVE VR</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            similique deserunt nostrum eos corporis dicta cupiditate laboriosam
            eaque, veniam officia unde! Ut quasi, totam ipsum animi doloremque
            quas vel eveniet?
          </p>
        </div>
      </div>
    </>
  );
}
export default Division;
