import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [artist, setArtist] = useState('');
	const [hobby, setHobby] = useState('');
	const [spotify, setSpotify] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, age, artist, hobby, spotify };

		axios
			.post(
				'https://sheet.best/api/sheets/008e2889-669a-4ff1-b107-abdfa8c8cc2c',
				objt
			)
			.then((response) => {
				console.log(response);
			});
			
	};

	return (
		<Container fluid className="container">
			<Header as="h2">Alg0r1t1m l0v3</Header>
			<Container>
				<h4>
				This data helps us get a baseline 🎧
				just click submit once!
				</h4>
			</Container>
			<Form className="form">
				<Form.Field>
				<Form.Field>
					<label>Spotify</label>
					<input
						placeholder="Enter your Spotify Name"
						onChange={(e) => setSpotify(e.target.value)}
					/>
				</Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Age</label>
					<input
						placeholder="Enter your Age"
						onChange={(e) => setAge(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Artist</label>
					<input
						placeholder="Enter your favorite Artist"
						onChange={(e) => setArtist(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Hobby</label>
					<input
						placeholder="Enter your Hobby"
						onChange={(e) => setHobby(e.target.value)}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;
