export class PackingListPage {
  constructor() {
    const appDiv: HTMLElement = document.getElementById('packing-list');
    const numberOfItems = 5;
    const uls = new Array[numberOfItems].keys().map(x => `<ul>Item ${x}</ul>`);
    const html = uls.reduce((str, all) => all + str, '');
    appDiv.innerHTML = html;
  }
}
