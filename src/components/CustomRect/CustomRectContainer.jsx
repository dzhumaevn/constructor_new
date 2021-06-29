import { connect } from "react-redux";
import CustomRect from "./CustomRect";

const contextMenuHandler = (evt) => {
  evt.evt.preventDefault();

  const input = document.createElement('input');
  input.type = 'color';
  input.style.position = 'absolute';
  input.style.x = '500';
  input.click();

  input.onchange = ({ target }) => {
    evt.target.setAttr('fill', target.value);
    return target.value;
  };
};

const mapDispatchToProps = () => {
  return {
    contextMenuHandler
  }
};

const CustomRectContainer = connect(null, mapDispatchToProps)(CustomRect);

export default CustomRectContainer;