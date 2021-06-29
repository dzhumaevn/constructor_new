import { connect } from "react-redux";
import CustomText from "./CustomText";

const textEditor = (e, textComponent) => {
  const stage = textComponent.getStage();

  // create textarea over canvas with absolute position

  // first we need to find position for textarea
  // how to find it?
  // at first lets find position of text node relative to the stage:
  const textPosition = e.currentTarget.getAbsolutePosition();

  // then lets find position of stage container on the page:
  const stageBox = stage.container().getBoundingClientRect();

  // so position of textarea will be the sum of positions above:
  const areaPosition = {
    x: stageBox.left + textPosition.x,
    y: stageBox.top + textPosition.y,
  };

  // create textarea and style it
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);

  const finishEditing = () => {
    textComponent.text(textarea.value);
    document.body.removeChild(textarea);

    stage.off('mousedown', finishEditing);
  };

  textarea.value = e.currentTarget.text();
  textarea.style.position = 'absolute';
  textarea.style.top = areaPosition.y + 'px';
  textarea.style.left = areaPosition.x + 'px';
  textarea.style.width = e.currentTarget.width();

  textarea.focus();

  textarea.addEventListener('keydown', function (e) {
    // hide on enter
    if ( e.key === 'Enter' && textarea.value.trim() ) {
      finishEditing();
    }
  });

  stage.on('mousedown', finishEditing);
};

const mapDispatchToProps = () => ({ textEditor });

const CustomTextContainer = connect(null, mapDispatchToProps)(CustomText);

export default CustomTextContainer;