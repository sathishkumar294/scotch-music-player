const { app, BrowserWindow } = require('electron')
require('dotenv').config();
require('electron-reload')(__dirname);

let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    if (process.env.PACKAGE === 'true') {
        win.loadURL('file://'+__dirname+'/dist/index.html');
    } else {
        win.loadURL('http://localhost:4200');
    }
    win.on('closed', function () {
        win = null;
    });
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})

app.on('window-all-closed', () => {
    app.quit();
})