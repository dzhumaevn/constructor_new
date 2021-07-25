import CustomTextContainer from "../CustomText/CustomTextContainer";

const Date = props => {
  const {
          width, x, y, fill, text: dateValue, fontFamily,
          fontSize, fontWeight, textAlign
        } = props.startDate;

  return (
    <CustomTextContainer { ...props.startDate }
                         text={
                           dateValue
                           &&
                           dateValue + (!props.isMarketingtv ? '\n' : ' ') + props.startTimeValue + ' МСК'
                         }
                         fontFamily={ fontFamily }
                         fontSize={ fontSize }
                         fontStyle={ fontWeight }
                         fill={ fill }
                         x={ !props.isOneMatch && props.isWebPush ? x + 308 : x }
                         y={ y }
                         width={ width }
                         wrap='word'
                         align={ textAlign }
    />
  );
};

export default Date;