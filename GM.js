// ==UserScript==
// @name         NGA优化摸鱼体验 - GM API实现
// @namespace    https://github.com/lifegpc/NGA-BBS-Script
// @version      1.0.0
// @updateURL    https://github.com/lifegpc/NGA-BBS-Script/raw/master/GM.js
// @author       lifegpc
// @description  Safari 扩展 UserScripts 适配
// @license      MIT
// @icon         https://i.loli.net/2021/04/07/8x3yFj2pWEKluSY.png
// @match        *://bbs.nga.cn/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://g.nga.cn/*
// @inject-into  content
// @run-at       document-start
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// ==/UserScript==
window.addEventListener("GM", async (ev) => {
    const name = ev.detail.name;
    const key = ev.detail.key;
    const args = ev.detail.args;
    function return_data(data) {
        const ev = new CustomEvent(name, {detail: {key, data}});
        window.dispatchEvent(ev);
    }
    function return_error(error) {
        const ev = new CustomEvent(name, {detail: {key, error}});
        window.dispatchEvent(ev);
    }
    if (name == "GM_getValue") {
        try {
            const data = await GM.getValue(args[0]);
            return_data(data);
        } catch (e) {
            return_error(e);
        }
    } else if (name == "GM_setValue") {
        try {
            const data = await GM.setValue(args[0], args[1]);
            return_data(data);
        } catch (e) {
            return_error(e);
        }
    } else if (name == "GM_deleteValue") {
        try {
            const data = await GM.deleteValue(args[0]);
            return_data(data);
        } catch (e) {
            return_error(e);
        }
    }
})
