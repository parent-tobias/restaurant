class Header extends HTMLElement {
    constructor () {
        super();
    }
    connectedCallback () {
        this.innerHTML = `<header class = "container-fluid">
        <nav class = "navbar navbar-expand-lg d-flex">
            <a href="index.html" class = "navbar-brand ps-4"><img src="./images/ChickenRepublic_Logo.svg" class = "img-fluid"></a>
            <ul class = "navbar-nav ms-auto pe-4" id="menu">
                <li class="nav-item">
                    <a href="index.html" class="nav-link" id="home">Home</a>
                </li>
                <li class="nav-item">
                    <a href="menu.html" class="nav-link" id="order">Menu</a>
                </li>
                <li class="nav-item">
                    <a href="https://www.chicken-republic.com/store-locator/" class="nav-link" id="location">Store Location</a>
                </li>
                <li class="nav-item">
                    <a href="https://www.chicken-republic.com/chicken-republic-ghana-and-nigeria/" class="nav-link" id="about">Brand</a>
                </li>
            </ul>
        </nav>
        </header>`
    }
}

customElements.define('header-component', Header)