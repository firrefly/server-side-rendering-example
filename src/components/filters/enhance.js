// Modules
import { compose } from "redux";
import { connect } from "react-redux";
// Actions
import {
  restaurantsChangeFilters as changeFilters,
} from "@actions/restaurants";
// Selectors
import { filtersStructuredSelector as mapStateToProps } from "@selectors";

const mapDispatchToProps = {
  changeFilters,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const enhance = compose(withConnect);
