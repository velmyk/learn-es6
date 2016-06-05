function useContent(template) {
	let content = document.getElementsByClassName('content')[0];
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	content.innerHTML = template;
}
module.exports = {
	useContent: useContent
};