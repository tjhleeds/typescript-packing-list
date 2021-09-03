import { MessageBuilder } from './messageBuilder';

export class App {
  run() {
    const appDiv: HTMLElement = document.getElementById('app');
    const message = new MessageBuilder().buildMessage('App running');
    appDiv.innerHTML = `<h1>${message}</h1>`;
  }
}
