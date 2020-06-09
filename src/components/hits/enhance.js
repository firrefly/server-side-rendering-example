// Modules
import { compose } from "redux";
import { connect } from "react-redux";
// Selectors
import { hitsStructuredSelector as mapStateToProps } from "@selectors";

const withConnect = connect(mapStateToProps,);

export const enhance = compose(withConnect);
