export default function getExtension(lang) {
	let extension = "";
	switch (lang) {
		case "c":
			extension = "c";
			break;
		case "cpp":
			extension = "cpp";
			break;
		case "java":
			extension = "java";
			break;
		case "javascript":
			extension = "js";
			break;
		case "python":
			extension = "py";
			break;
		default:
			break;
	}
	return extension;
}
