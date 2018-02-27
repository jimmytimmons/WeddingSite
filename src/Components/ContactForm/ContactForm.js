import React, { Component } from 'react'

import './ContactForm.scss'

const className = `ContactForm`;

class ContactForm extends Component {
	render()  {
		return (
			<div
				className={`${className}__wrapper`}
			>
				<span
					className={`${className}__title`}
				>{`Send us a message!`}</span>
				<form
					action="https://formspree.io/katieandjimmysayido@gmail.com"
					method="POST"
					className={`${className}__form`}
				>
					<input
						type="text"
						name="name"
						placeholder={`Your name`}
						className={`${className}__input`}
					/>
					<input
						type="email"
						name="_replyto"
						placeholder={`Your email address`}
						className={`${className}__input`}
					/>
					<textarea
						name="message"
						placeholder={`Your message`}
						className={`${className}__text`}
					/>
					<input
						type="submit"
						value="Send"
						className={`${className}__button`}
					/>
				</form>
			</div>
		);
	}
}

export default ContactForm;