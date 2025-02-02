function openApp(appName) {
    document.getElementById("app-screen").style.display = "block";
    document.getElementById("app-content").innerText = "Você abriu: " + appName;
}

function closeApp() {
    document.getElementById("app-screen").style.display = "none";
}
