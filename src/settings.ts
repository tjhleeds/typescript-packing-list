export class SettingsPage {
  constructor(){
    const appDiv: HTMLElement = document.getElementById('settings-list');
    const numberOfSettings = 5;
    const uls = new Array[numberOfSettings].keys()
      .map(x => `<ul>Setting ${x}</ul>`);
    const html = uls.reduce((str, all) => all + str, '');
    appDiv.innerHTML = html;
  }
}