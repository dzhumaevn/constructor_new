import Loader from "./Loader";
import { connect } from "react-redux";

const mapStateToProps = state => ({ progressValue: state.loader.progressValue });

export default connect(mapStateToProps, null)(Loader);