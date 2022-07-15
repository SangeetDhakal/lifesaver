import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../Input";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function FormInput({ name, ...otherProps }) {
	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		values,
		errors,
		touched,
	} = useFormikContext();
	return (
		<>
			<Input
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
const styles = StyleSheet.create({
	container: {},
});
export default FormInput;
