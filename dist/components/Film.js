import { Component } from './component.js';
import { SERIES } from './data';
export class Film extends Component {
    series;
    constructor(selector) {
        super();
        this.series = SERIES;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let html = `
            <li class="serie">`;
        this.series.forEach((item) => {
            html += `<img
                  class="serie__poster"
                  src="$}"
                  alt="The Sopranos poster"
                />`;
        });
        `<h4 class="serie__title">The Sopranos</h4>
                <p class="serie__info">David Chase (1999)</p>
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
