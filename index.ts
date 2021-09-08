// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

import { Observable } from 'rxjs';

let observable = new Observable((observer: any) => {
  observer.next('Hi!');
});

observable.subscribe((x: any) => console.log(x));
