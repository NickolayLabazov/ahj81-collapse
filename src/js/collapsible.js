import { text } from './text.js';

export default class Collapsible {
  constructor(parent) {
    this.parent = parent;
    this.text = text;
    this.mainDiv = null;
    this.form = null;
    this.buttin = null;
    this.cont = null;
    this.textCont = null;
    this.textContDiv = null;
    this.copy = null;
  }

  create() {
    this.mainDiv = document.createElement('div');
    this.form = document.createElement('form');
    this.button = document.createElement('button');
    this.form.appendChild(this.button);
    this.parent.appendChild(this.mainDiv);
    this.mainDiv.appendChild(this.form);
    this.button.setAttribute('class', 'button');
    this.button.innerHTML = 'collapse';
    this.cont = document.createElement('div');
    this.textContDiv = document.createElement('div');
    this.textCont = document.createElement('p');
    this.textCont.innerHTML = this.text;
    this.mainDiv.appendChild(this.textContDiv);
    this.textContDiv.appendChild(this.textCont);
    this.textCont.setAttribute('class', 'textCont');
    this.textContDiv.setAttribute('class', 'textContDiv');
    this.copy = document.createElement('button');
    this.mainDiv.appendChild(this.copy);
    this.copy.innerHTML = 'copy';
    this.copy.setAttribute('class', 'copy');
    this.addListener();
  }

  addListener() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.textContDiv.classList[0] === 'textContDiv') {
        this.textContDiv.classList.remove('textContDiv');
        this.textContDiv.classList.add('textContDivClick');
      } else {
        this.textContDiv.classList.remove('textContDivClick');
        this.textContDiv.classList.add('textContDiv');
      }
    });
  }
}
