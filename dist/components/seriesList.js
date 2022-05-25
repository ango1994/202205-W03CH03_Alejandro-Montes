import { Component } from './component.js';
import { SERIES } from './data.js';
import { Film } from './Film.js';
export class SeriesList extends Component {
    series;
    constructor(selector) {
        super();
        this.series = SERIES;
        this.template = this.createTemplate();
        this.render(selector);
        this.series.forEach((item) => {
            if (item.watched) {
                new Film(item, 'slot.watched');
            }
            else {
                new Film(item, 'slot.pending');
            }
        });
    }
    createTemplate() {
        return `
          <section class="series">
                    <h2 class="section-title">Series list</h2>
                    
        <section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have 4 series pending to watch</p>
                        <!--<p class="info">Congrats! You've watched all your series</p>-->
                        <ul class="series-list">
                        <slot class="pending"></slot> 
                        </ul>
                    </section>
        
                    
                    
                    <section class="series-watched">
                        <h3 class="subsection-title">Watched series</h3>
                        <p class="info">You have watched 4 series</p>
                        <p class="info">You already have not watched any serie</p>
                        <ul class="series-list series-list--watched">
                        <slot class="watched"></slot>
                        </ul>
                         </section>
                        `;
    }
}
