const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const started = require("electron-squirrel-startup");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 300,
        minHeight: 200,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: false,
        },
    });

    mainWindow.on("resize", () => {
        const [width, height] = mainWindow.getSize();
        const minHeight = Math.round(width / 1.7);
        if (height < minHeight) {
            mainWindow.setSize(width, minHeight); // Принудительно изменяем размер окна
        }
    });

    mainWindow.setMenuBarVisibility(false);
    //Development
    // mainWindow.loadURL(" http://localhost:5173");
    //Production
    mainWindow.loadFile(path.join(__dirname, "index.html"));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
