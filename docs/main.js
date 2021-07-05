function Search(input) {

    let list = document.getElementById("cringeList");

    //Kill the younglins
    while(list.children.length !== 0) {
        list.lastChild.remove();
    }

    data.forEach((itemName) => {
        if (itemName.toUpperCase().indexOf(input.toUpperCase()) > -1) {
            let item = document.createElement("li");

            item.innerHTML = itemName;
            item.onclick = function () {
                location.href = `${itemName}/index.html`;
            }

            list.appendChild(item)
        }
    })
}