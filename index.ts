// Import stylesheets
import './style.css';

import { Observable } from 'rxjs';

const observable = new Observable((observer: any) => {
  try {
    observer.next('Hi!');
    observer.next('How are you?');
    setInterval(() => {
      observer.next('I am good.');
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
});

const observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
);

const observer2 = observable.subscribe((x: any) => addItem(x));

observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe();
}, 6001);

// ez a fv. jelenyíti meg JS kóddal a li elemet
function addItem(val: any) {
  let node = document.createElement('li');
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
