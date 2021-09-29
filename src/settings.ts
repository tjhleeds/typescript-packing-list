export class SettingsPage {
  constructor(){
    const appDiv: HTMLElement = document.getElementById('settings-list');
    const numberOfSettings = 5;
    const listItems = new Array[numberOfSettings].keys()
      .map(x => `<li>Setting ${x}</li>`);
    const html = listItems.reduce((str, all) => all + str, '');
    appDiv.innerHTML = html;
  }
}