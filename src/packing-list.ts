export class PackingListPage {
  constructor() {
    const appDiv: HTMLElement = document.getElementById('packing-list');
    const numberOfItems = 5;
    const listItems = new Array[numberOfItems].keys().map(x => `<li>Item ${x}</li>`);
    const html = listItems.reduce((str, all) => all + str, '');
    appDiv.innerHTML = html;
  }
}
