class Footer extends HTMLElement {
    constructor () {
        super();
    }
    connectedCallback () {
        this.innerHTML = `<svg viewBox="-50 -50 300 300">
        <polygon class="triangle" stroke-linejoin="round" points="100,0 0,200 200,200"/>
      </svg>`
    }
}

customElements.define('triangle-icon', Footer)