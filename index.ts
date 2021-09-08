// Import stylesheets
import './style.css';

import { Observable } from 'rxjs';

let observable = new Observable((observer: any) => {
  observer.next('Hi!');
});

observable.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  let node = document.createElement('li');
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
