// Import stylesheets
import './style.css';

import { Observable } from 'rxjs';

let observable = new Observable((observer: any) => {
  observer.next('Hi!');
  observer.next('How are you?');
  observer.complete();
});

observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
);

// ez a fv. jelenyíti meg JS kóddal a li elemet
function addItem(val: any) {
  let node = document.createElement('li');
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
