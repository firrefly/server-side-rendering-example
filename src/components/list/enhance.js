// Modules
import { compose } from "redux";
import { connect } from "react-redux";
// Selectors
import { listStructuredSelector as mapStateToProps } from "@selectors";

const withConnect = connect(mapStateToProps,);

export const enhance = compose(withConnect);
