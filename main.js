const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    
    mainWindow = new BrowserWindow({
        
        width: 300,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
        
    });
    
    mainWindow.loadURL(
        
        url.format({
            pathname: path.join(__dirname, 'pages/index.html'),
            protocol: 'file:',
            slashes: true
        })
        
    );
    
})