function CategoryWatch_OnClick() {
    var elementsToHide = document.getElementsByClassName("category-airpods");
    for (const elementToHide of elementsToHide) {
        elementToHide.style.display = 'none';
    }
    elementsToHide = document.getElementsByClassName("category-iphone");
    for (const elementToHide of elementsToHide) {
        elementToHide.style.display = 'none';
    }
}



{/* <button onclick="CategoryAll_OnClick()">Alla</button>
				<button onclick="CategoryIPhone_OnClick()">iPhone</button>
				<button onclick="CategoryIPad_OnClick()">iPad</button>
				<button onclick="CategoryMacBook_OnClick()">MacBook</button>
				<button onclick="CategoryWatch_OnClick()">Watch</button>
				<button onclick="CategoryOther_OnClick()">Övrigt</button> */}