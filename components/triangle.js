class triangle extends HTMLElement {
    constructor () {
        super();
    }
    connectedCallback () {
        this.innerHTML = `<svg viewBox="-40 -60 350 350">
        <polygon class="triangle" stroke-linejoin="round" points="100,0 0,200 200,200"/>
      </svg>`
    }
}

customElements.define('triangle-icon', triangle)