import { Component } from './component.js';
import { SERIES } from './data.js';
import { Film } from './Film.js';
export class SeriesList extends Component {
    selector;
    series;
    constructor(selector) {
        super();
        this.selector = selector;
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
        const notWatched = this.series.filter((item) => {
            return !item.watched;
        }).length;
        const watched = this.series.filter((item) => {
            return item.watched;
        }).length;
        return `
          <section class="series">
                    <h2 class="section-title">Series list</h2>
                    
        <section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have ${notWatched} series pending to watch</p>
                        <p class="info">${!notWatched
            ? 'Congrats! You ve watched all your series'
            : ''}</p>
                        <ul class="series-list">
                        <slot class="pending"></slot> 
                        </ul>
                    </section>
        
                    
                    
                    <section class="series-watched">
                        <h3 class="subsection-title">Watched series</h3>
                        <p class="info">You have watched ${watched}  series</p>
                        <p class="info">${!watched
            ? 'You already have not watched any serie'
            : ''}</p>
                        <ul class="series-list series-list--watched">
                        <slot class="watched"></slot>
                        </ul>
                         </section>
                        `;
    }
    manageComponent() {
        document
            .querySelectorAll('.fas.fa-times-circle')
            .forEach((item) => item.addEventListener('click', () => console.log('hola mundo')));
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
    }
    handlerButton(ev) {
        const deletedId = ev.target.dataset.name;
        console.log('click', deletedId);
        this.series = this.series.filter((item) => item.name !== deletedId);
        this.updateComponent();
    }
}
