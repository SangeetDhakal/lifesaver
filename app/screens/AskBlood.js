import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import BloodPicker from "../components/BloodPicker";
import Screen from "../components/Screen";
import NumericInput from "react-native-numeric-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../config/colors";
import { Formik, Field } from "formik";
import Header from "../components/Header";
import * as Yup from "yup";
import { FormInput, FormSubmit } from "../components/forms";
import bRequests from "../api/bRequests";
import authStorage from "../auth/storage";
import { TextInput } from "react-native";
import AuthContext from "../auth/context";
import jwtDecode from "jwt-decode";
import UploadScreen from "./UploadScreen";

const bloodGroups = [
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "A + ",
		value: 1,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "A -",
		value: 2,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "AB +",
		value: 3,
	},
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "AB - ",
		value: 4,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "B +",
		value: 5,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "B -",
		value: 6,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "O +",
		value: 6,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "O -",
		value: 6,
	},
];

const validationSchema = Yup.object().shape({
	phone: Yup.string().required().min(10).max(10).label("Phone Number"),
	accountName: Yup.string().required().min(4).label("Name"),
	bloodGroup: Yup.string().required().label("Blood Group"),
	quantity: Yup.number().required(),
	location: Yup.string().required().min(4).label("Location"),
	hospital: Yup.string().required().min(4).label("Hospital"),
	reason: Yup.string().required().min(4).label("Reason"),
	description: Yup.string().required().min(4).label("Description"),
});

function AskBlood({ navigation }) {
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const { user, setUser } = useContext(AuthContext);
	const [category, setCategory] = useState();
	const handleSubmit = (bRequest, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = bRequests.sendBRequests(bRequest, user, (progress) =>
			setProgress(progress)
		);

		console.log(result);
		if (!result) {
			setUploadVisible(false);
			return alert("Could not save listing");
		}
		setCategory();
		resetForm();
		setFieldTouced(false);
	};

	return (
		<Screen>
			<KeyboardAwareScrollView extraHeight={220} enableOnAndroid={true}>
				<Header navigation={navigation} />
				<UploadScreen
					onDone={() => setUploadVisible(false)}
					progress={progress}
					visible={uploadVisible}
				/>
				<Formik
					initialValues={{
						phone: "",
						accountName: "",
						bloodGroup: "",
						quantity: "",
						hospital: "",
						location: "",
						reason: "",
						description: "",
					}}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					{({ setFieldValue, values }) => (
						<>
							<Text style={{ textAlign: "center", marginTop: 20 }}>
								Fill up the form completly
							</Text>
							<View style={styles.container}>
								<FormInput
									autocorrect={false}
									name="accountName"
									icon="account"
									placeholder="Enter your name"
									autocorrect={false}
									textContentType="name"
								/>
								<FormInput
									icon="phone"
									name="phone"
									keyboardType="phone-pad"
									placeholder="Enter your phone number **"
									textContentType="telephoneNumber"
								/>

								<View style={styles.blood}>
									<View style={styles.picker}>
										<BloodPicker
											selectedItem={category}
											onSelectItem={(item) => {
												setFieldValue("bloodGroup", item.label);
												setCategory(item);
											}}
											noOfColumns={1}
											bloodGroup={bloodGroups}
											placeholder="Blood Group"
											// onPress={() => console.log("Blood Group")}
										/>
									</View>
									<View style={styles.qty}>
										<FormInput
											name="quantity"
											keyboardType="phone-pad"
											placeholder="Qty"
											textContentType="telephoneNumber"
										/>
									</View>
								</View>
								<FormInput
									icon="hospital"
									name="hospital"
									autocorrect={false}
									placeholder="Hospital"
								/>
								<FormInput
									icon="pin"
									name="location"
									autocorrect={false}
									placeholder="Enter your location"
									textContentType="location"
								/>
								<FormInput
									placeholder="Reason"
									name="reason"
									autocorrect={false}
									icon="help-circle-outline"
								/>
								<FormInput name="description" placeholder="Description" />
							</View>
							<View style={styles.container}>
								<FormSubmit title="Request Blood" />
							</View>
						</>
					)}
				</Formik>
			</KeyboardAwareScrollView>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	blood: {
		flex: 1,
		flexDirection: "row",
	},
	number: {
		padding: 20,
	},
	picker: {
		flex: 0.6,
	},
	qty: {
		marginTop: 10,
		paddingLeft: 20,
		flex: 0.3,
	},
});
export default AskBlood;
