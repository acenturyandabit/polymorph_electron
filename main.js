const { app, BrowserWindow } = require('electron');
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html');
}
//perform a quick version check to the polymorph repo

app.whenReady().then(createWindow);