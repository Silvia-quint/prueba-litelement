import { LitElement, html, css } from "lit";

const uri = "rickandmortyapi.com/api/character";

class BaseElement extends LitElement {
  constructor() {
    super();
    this.character = {
      name: "char-1",
      image: "urlimagen",
      episode: ["url-episodio1", "url-episodio2"]
    };
    console.log(this.character);
    // this.fetchData();
  }

  static get styles() {
    return css`div { background: black; }`;
  }

  render() {
    return html`<div>
       <div>${this.character.name}</div>
       </div>`;
  }

  fetchData() {
    fetch(`${uri}${1}`)

      .then(response => response.json())

      .then(data => {
        this.character = {

          name: data.name,

          image: data.image,

          episode: data.episode

        };
      });
  }

  connectedCallback() {
    this.charId = this.getAttribute("char-id");

    this.fetchData();
  }
}

customElements.define("base-element", BaseElement);
