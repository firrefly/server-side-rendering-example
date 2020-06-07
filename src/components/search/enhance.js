// Modules
import { compose } from "redux";
import { connect } from "react-redux";
// Actions
import {
  restaurantsChangeSearch as changeSearch,
} from "@actions/restaurants";

const mapDispatchToProps = { changeSearch };
const withConnect = connect(null, mapDispatchToProps);

export const enhance = compose(withConnect);
