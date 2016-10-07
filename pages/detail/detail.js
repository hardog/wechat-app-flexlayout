var app = getApp();
Page({
    onLoad: function(opts){
        console.log('detail:', app.globalData.plist[opts.index]);
    }
});