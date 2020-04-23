import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Form } from "semantic-ui-react";

/*<Form.Group inline>
					<Field
						component={SemanticDatepicker}
						name="notWorking"
						label="Date of birth"
						placeholder="select your DOB"
						size="small"
						format="DD/MM/YYYY"
					/>
				</Form.Group> */
class SongList extends Component {
	render() {
		return (
			<Form>
				<Form.Group inline>
					<Field
						component={SemanticDatepicker}
						name="working"
						label="Date of birth"
						placeholder="select your DOB"
						size="small"
					/>
				</Form.Group>
			</Form>
		);
	}
}

export default reduxForm({
	form: "songList",
})(SongList);
