const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            // 预加载脚本
            preload: path.join(__dirname, "preload.js"),
            // 上下文不隔离
            contextIsolation: false
        }
    })

    // 生产模式（build 之后），额外配置在 vue.config.js
    // win.loadFile('./dist/index.html')

    // 下面两行是测试模式，实时调试。建议先启动 vue，在启动 electron
    win.loadURL('http://localhost:8080/')
    win.webContents.openDevTools()

}

// 一些 electron 基本的响应事件
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
