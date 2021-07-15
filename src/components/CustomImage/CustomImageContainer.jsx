import { connect } from "react-redux";
import CustomImage from "./CustomImage";

const changeSrc = (imageNode, src) => {
  const imageObj = new Image(src);

  imageObj.onload = () => {
    imageNode.image(imageObj);
    imageNode.width(imageObj.naturalWidth);
    imageNode.height(imageObj.naturalHeight);
  };

  imageObj.src = src;
  imageObj.crossOrigin = "Anonymous";
};

const contextMenuHandler = e => {
  e.evt.preventDefault();
  const imageNode = e.target;

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.click();
  input.onchange = ({ target }) => {
    const fReader = new FileReader();
    fReader.readAsDataURL(target.files[0]);

    fReader.onloadend = (e) => {
      changeSrc(imageNode, e.target.result);
    }
  };
};

const mapStateToProps = state => ({ format: state.format });
const mapDispatchToProps = () => ({ contextMenuHandler });

const CustomImageContainer = connect(mapStateToProps, mapDispatchToProps)(CustomImage);

export default CustomImageContainer;