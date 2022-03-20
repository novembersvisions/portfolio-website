function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["https://imgur.com/Ha1qU8K.png", "https://imgur.com/oliSbWl.png", "https://imgur.com/rCqAO46.png", "https://imgur.com/4mYwKmO.png", "https://imgur.com/UM0mKm2.png", "https://imgur.com/X7INatJ.png", "https://imgur.com/8BKk6AB.png", "https://imgur.com/v359jsJ.png", "https://imgur.com/XYgUvuc.png", "https://imgur.com/gHzJDNb.png", "https://imgur.com/5bFW878.png", "https://imgur.com/JuQm0jU.png", "https://imgur.com/PGYWNaz.png", "https://imgur.com/NzmcBTo.png", "https://imgur.com/3fQE2rZ.png", "https://imgur.com/1WM2uz6.png", "https://imgur.com/r5Y4Kh0.png", "https://imgur.com/pwdkP65.png", "https://imgur.com/dZOyiS7.png", "https://imgur.com/SUea4VM.png", "https://imgur.com/FdLcbhy.png", "https://imgur.com/V0pwFnB.png", "https://imgur.com/5SCJ6Sq.png", "https://imgur.com/v5GY7Og.png", "https://imgur.com/SkBn772.png", "https://imgur.com/SpRNMLP.png", "https://imgur.com/02c4dE3.png", "https://imgur.com/tgsw8Mb.png", "https://imgur.com/G4oWTed.png", "https://imgur.com/NJVEMgj.png", "https://imgur.com/uI4aro8.png", "https://imgur.com/FQ7btkG.png", "https://imgur.com/wlWb9yE.png", "https://imgur.com/VTuH8gX.png", "https://imgur.com/XNzFd2f.png", "https://imgur.com/UuHdB3E.png", "https://imgur.com/yLZhA3i.png", "https://imgur.com/PKJXTM5.png", "https://imgur.com/vaVNLQt.png", "https://imgur.com/0gxvTtW.png", "https://imgur.com/1gEApdW.png", "https://imgur.com/lRr1SKH.png", "https://imgur.com/pT7193h.png", "https://imgur.com/Qwwiqe2.png", "https://imgur.com/UQjc3MD.png", "https://imgur.com/trCfWin.png", "https://imgur.com/LdDA93U.png", "https://imgur.com/nER3fbS.png", "https://imgur.com/gneOz71.png", "https://imgur.com/yxroRHk.png"]);