if (localStorage.passcount == null) localStorage.passcount = 0;
window.passCounter.innerHTML = localStorage.passcount;
if (localStorage.failcount == null) localStorage.failcount = 0;
window.failCounter.innerHTML = localStorage.failcount;

function load_exploit_HEN() {
    msgs.innerHTML = "Initializing HEN";
    LoadedMSG = "HEN Initialized ✔";

    function getScript(source, callback) {
        var gs = document.createElement('script');
        gs.src = source;
        gs.onload = callback;
        gs.async = false;
        document.body.appendChild(gs);
    }

    function loadScript() {
        getScript("exploits/exp_kernelHEN.js", function() {
            setTimeout(jailbreak, 500);
        });
    }
    loadScript();
}

function load_exploit_MIRA() {
    msgs.innerHTML = "Initializing Mira";
    LoadedMSG = "Mira Initialized ✔";

    function getScript(source, callback) {
        var gs = document.createElement('script');
        gs.src = source;
        gs.onload = callback;
        gs.async = false;
        document.body.appendChild(gs);
    }

    function loadScript() {
        getScript("exploits/exp_kernelMira.js", function() {
            setTimeout(jailbreak, 500);
        });
    }
    loadScript();
}

function load_exploit_MIRAunoff() {
    msgs.innerHTML = "Initializing Mira UN";
    LoadedMSG = "Mira unofficial Initialized ✔";

    function getScript(source, callback) {
        var gs = document.createElement('script');
        gs.src = source;
        gs.onload = callback;
        gs.async = false;
        document.body.appendChild(gs);
    }

    function loadScript() {
        getScript("exploits/exp_kernelMiraUN.js", function() {
            setTimeout(jailbreak, 500);
        });
    }
    loadScript();
}

function load_exploit_MIRAnohb() {
    msgs.innerHTML = "Initializing Mira NoHub";
    LoadedMSG = " Mira NoHub Initialized ✔";

    function getScript(source, callback) {
        var gs = document.createElement('script');
        gs.src = source;
        gs.onload = callback;
        gs.async = false;
        document.body.appendChild(gs);
    }

    function loadScript() {
        getScript("exploits/exp_kernelMiraNoHB.js", function() {
            setTimeout(jailbreak, 500);
        });
    }
    loadScript();
}

function load_binloader() {
    msgs.innerHTML = "Initializing Bin Loader";
    LoadedMSG = "Bin Loader Initialized✔. Port 9021";
    var script = document.createElement('script');
    script.src = "exploits/exp_BinLoader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_ftp() {
    msgs.innerHTML = "Initializing FTP";
    LoadedMSG = "FTP Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_ftp.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_dumper() {
    msgs.innerHTML = "Initializing Dumper";
    LoadedMSG = "Dumper Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_dumper.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_linux() {
    msgs.innerHTML = "Initializing Linux";
    LoadedMSG = "Linux Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_linux.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_app2usb() {
    msgs.innerHTML = "Initializing AppToUSB";
    LoadedMSG = "AppToUSB Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_app2usb.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_kerneldump() {
    msgs.innerHTML = "Initializing Kernel Dumper";
    LoadedMSG = "Kernel Dumper Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_kernelDumper.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_webrte() {
    msgs.innerHTML = "Initializing WebRTE";
    LoadedMSG = "WebRTE Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_WebRTE.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_ps4debug() {
    msgs.innerHTML = "Initializing Ps4Debug";
    LoadedMSG = "Ps4Debug Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_ps4debug.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_todex() {
    msgs.innerHTML = "Initializing ToDex";
    LoadedMSG = "ToDex Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_ToDEX.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_todev() {
    msgs.innerHTML = "Initializing ToDev";
    LoadedMSG = "ToDev Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_ToDEV.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_tokratos() {
    msgs.innerHTML = "Initializing ToKratos";
    LoadedMSG = "ToKratos Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_ToKratos.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_historyblock() {
    msgs.innerHTML = "Initializing History Blocker";
    LoadedMSG = "History Blocker Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_historyBlocker.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_updatesdisable() {
    msgs.innerHTML = "Initializing Update Blocker";
    LoadedMSG = "Update Blocker Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_updatesDisable.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_updatesenable() {
    msgs.innerHTML = "Initializing Update Enabler";
    LoadedMSG = "Update Enabler Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_updatesEnable.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_dbBackup() {
    msgs.innerHTML = "Initializing DBBackup";
    LoadedMSG = "DBBackup Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_dbBackup.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_dbRestore() {
    msgs.innerHTML = "Initializing DBRestore";
    LoadedMSG = "DBRestore Initialized ✔";
    var script = document.createElement('script');
    script.src = "exploits/pl_dbRestore.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var script = document.createElement('script');
    script.src = "exploits/exp_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}