import React from "react";

import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export const CustomDatepicker = ({ dateFormat, ...rest }) => (
	<SemanticDatepicker {...rest} format={dateFormat} />
);
