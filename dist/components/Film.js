import { Component } from './component.js';
export class Film extends Component {
    serie;
    series;
    constructor(serie, selector) {
        super();
        this.serie = serie;
        this.series = serie;
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let html = '';
        html += `<li class="serie"><img
                  class="serie__poster"
                  src="${this.serie.poster}"
                  alt="${this.serie.name} poster"/>
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>`;
        html += `
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>
        `;
        return html;
    }
}
