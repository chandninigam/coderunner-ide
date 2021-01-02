import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

import { ControlledEditor as Editor } from "@monaco-editor/react";
import HelloWorld from "./utils/helloworld";

import { key as Token } from "./utils/apikey";
import getExtension from "./utils/getextension";

// import { cpp } from "compile-run";

function App() {
	const [lang, setlang] = useState("c");
	const [theme, settheme] = useState("dark");

	const [valueeditor, setvalueeditor] = useState(HelloWorld[lang]);

	const [input, setinput] = useState("");

	return (
		<div className="container app">
			<div className="section1">
				<h2>Code Runner</h2>
			</div>
			<div className="section2 ">
				{/*Language Selection*/}
				<div className="optiondiv">
					<h5>Language</h5>
					<select
						onChange={(event) => {
							setlang(event.target.value);
							setvalueeditor(HelloWorld[event.target.value]);
						}}
					>
						<option value="c">C</option>
						<option value="cpp">C++</option>
						<option value="java">Java</option>
						<option value="javascript">Javascript</option>
						<option value="python">Python</option>
					</select>
				</div>
				{/* Theme Selection */}
				<div className="optiondiv">
					<h5>Theme</h5>
					<select
						defaultValue={"dark"}
						onChange={(event) => {
							settheme(event.target.value);
						}}
					>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
					</select>
					<button
						className="btn btn-primary ml-2"
						onClick={() => {
							const url = "https://api.jdoodle.com/v1/execute";
							const data = {
								script: valueeditor,
								language: lang,
							};
							const config = {
								headers: {
									"Access-Control-Allow-Origin": "*",
									"Content-Type": "application/json",
								},
							};
							Axios.post(url, data, config)
								.then((result) => {
									console.log(result);
								})
								.catch((error) => {
									console.log(error);
								});
						}}
					>
						RUN
					</button>
				</div>
			</div>

			<div className="section3">
				{/* CODING */}
				<Editor
					width="100%"
					height="600px"
					language={lang}
					theme={theme}
					value={valueeditor}
					onChange={(event, value) => {
						setvalueeditor(value);
					}}
				/>
			</div>
			<div className="section4">
				<div className="inputdiv">
					<textarea
						rows="7"
						cols="50"
						placeholder="INPUT"
						onChange={(event) => {
							setinput(event.target.value);
						}}
					/>
				</div>
				<div className="outputdiv">
					<textarea rows="7" cols="50" disabled value="OUTPUT"></textarea>
				</div>
			</div>
		</div>
	);
}

export default App;
