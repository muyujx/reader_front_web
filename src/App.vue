<template>

    <div id="main" @dblclick="fullScreen">
        <router-view/>
    </div>

    <Loading/>

</template>

<style src="./styles/Themes.less" lang="less"/>
<style src="./styles/Main.less" lang="less"/>

<!--对 element-plus 的修改-->
<style src="./styles/Element.less" lang="less"/>

<script lang="ts" setup>

import {themeStore} from "./store/theme.ts";
import hotkeys from 'hotkeys-js';
import Loading from "./components/Loading.vue";


const theme = themeStore();
document.body.classList.add(theme.current);


hotkeys('ctrl+s', (e) => e.preventDefault());
hotkeys('esc', (e) => {
    window.history.back();
});
hotkeys('f11', fullScreen);

let full = false;

function fullScreen() {

    full = !full;

    if (full) {
        document.body.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

</script>