import React, { useState, useEffect } from "react";
import axios from "axios";


export const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		company: "",
		phone: "",
	});

	const { firstName, lastName, email, company, phone } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const newContact = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			company: company,
			phone: phone,
		};
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const body = JSON.stringify(newContact);
			await axios.post("/contact", body, config);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				company: "",
				phone: "",
			});
			window.location.reload();
		} catch (err) {
			console.error("error", err.response.data);
		}
	};

	


	return (
		<>
			<form className="contact-form" onSubmit={onSubmit}>
				<input
					type="text"
					name="firstName"
					value={firstName}
					placeholder="Enter your first name"
					onChange={(e) => onChange(e)}
					required
				></input>
				<br />
				<input
					type="text"
					name="lastName"
					value={lastName}
					placeholder="Enter your last name"
					onChange={(e) => onChange(e)}
					required
				></input>
				<br />
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Enter your email"
					onChange={(e) => onChange(e)}
					required
				></input>
				<br />
				<input
					type="text"
					name="company"
					value={company}
					placeholder="Enter your company name"
					onChange={(e) => onChange(e)}
					required
				></input>
				<br />
				<input
					type="tel"
					name="phone"
					value={phone}
					placeholder="Enter your phone no."
					onChange={(e) => onChange(e)}
					required
				></input>
				<button type="submit">Add new Contact</button>
			</form>
			</>
	)
}

