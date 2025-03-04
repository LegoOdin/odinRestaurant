function homePage() {
    const content = document.getElementById("content");

    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    const pageTitle = document.createElement("h2");
    pageTitle.textContent = "About us";
    content.appendChild(pageTitle);

    const aboutRest = document.createElement("div");
    aboutRest.textContent = "Doggy Drop isn't your average hotdog stand. We're slinging street-inspired dogs with a serious flavor kick. Think fresh ingredients, bold combos, and a whole lot of good vibes. Come join the flavor revolution!";
    content.appendChild(aboutRest);
}
export default homePage;