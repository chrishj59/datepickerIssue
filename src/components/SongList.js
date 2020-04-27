import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Form, Button } from "semantic-ui-react";
import { CustomDatepicker } from "./CustomDatePicker";

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
	onSubmit = (formProps) => {
		// dont need to bind the context
		console.log("onSubmit");
		console.log(formProps);
		// this.props.signup(formProps, () => {
		// 	this.props.history.push("/profile");
		// });
	};
	render() {
		const { handleSubmit } = this.props;
		return (
			<Form onSubmit={handleSubmit(this.onSubmit)}>
				<Form.Group>
					<Field
						component={SemanticDatepicker}
						name="working"
						dateFormat="DD/MM/YYYY"
						label="Date of birth"
						placeholder="select your DOB"
						size="small"
						onChange={(e, value) => {
							console.log(e, value);
						}}
					/>
				</Form.Group>
				<Form.Field
					control={Button}
					color="purple"
					className="submit-btn"
					type="submit"
					width={6}
				>
					Save
				</Form.Field>
			</Form>
		);
	}
}

export default reduxForm({
	form: "songList",
})(SongList);
