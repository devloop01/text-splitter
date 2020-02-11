console.clear();

function split() {
	const containers = Array.from(document.querySelectorAll("[data-split]"));
	containers.forEach(container => {
		let wordsArray = container.innerHTML.split(" ");
		let totalWords = wordsArray.length;
		let totalChars = 0,
			charIndex = 0;

		container.innerHTML = "";

		wordsArray.forEach((word, wordIndex) => {
			let wordContainer = document.createElement("span");
			wordContainer.className = "word";
			wordContainer.setAttribute("data-word", word);
			setProperty(wordContainer, "--word-index", wordIndex);

			let whitespaceContainer = document.createElement("span");
			whitespaceContainer.className = "whitespace";
			whitespaceContainer.innerHTML = " ";

			container.appendChild(wordContainer);
			container.appendChild(whitespaceContainer);

			for (const char of word) {
				let span = document.createElement("span");
				span.className = "char";
				span.setAttribute("data-char", char);
				setProperty(span, "--char-index", charIndex);
				span.innerHTML = char;
				wordContainer.appendChild(span);
				charIndex++;
				totalChars++;
			}
		});

		container.classList.add("words", "split");
		setProperty(container, "--word-total", totalWords);
		setProperty(container, "--char-total", totalChars);
	});
}

function setProperty(el, varName, value) {
	el.style.setProperty(varName, value);
}

split();
