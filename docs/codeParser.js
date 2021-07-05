let keywords = ["let", "var", "const", "function", "for"];

let codeBlocks = document.getElementsByClassName("codeBlock");

for (let i = 0; i < codeBlocks.length; i++) {
    let block = codeBlocks.item(i);

    let text = block.innerHTML;
    let words = text.split(" ");

    block.innerHTML = "";

    words.forEach((word) => {
        if(keywords.includes(word)) {
            let span = document.createElement("span");
            span.style.color = "rgb(255,117,47)"
            span.innerHTML = word;
            block.appendChild(span);
        } else {
            for (let i = 0; i < word.length; i++) {
                let letter = word.charAt(i);

                if (letter === "(") {

                }
            }

            block.innerHTML += ` ${word}`;
        }
    })
}