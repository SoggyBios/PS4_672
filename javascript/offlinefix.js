function DLProgress(e) {
    Percent = (Math.round(e.loaded / e.total * 100));
    window.msgs.innerHTML = "Installing Offline Cache: " + Percent + "%";
}

function DisplayCacheProgress() {
    setTimeout(function() {
        window.msgs.innerHTML = "Cache Installed Successfully";
    }, 1000);
    setTimeout(function() {
        window.msgs.innerHTML = "Now Close And Re-Open Your Browser";
    }, 3000);
}
window.applicationCache.addEventListener("progress", DLProgress, false);
window.applicationCache.oncached = function(e) {
    DisplayCacheProgress();
};
window.applicationCache.onupdateready = function(e) {
    DisplayCacheProgress();
};