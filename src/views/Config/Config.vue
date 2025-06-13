<template>

    <div class="config">

        <div class="config-content">


            <div class="config-item">

                <div class="config-title">
                    当前账号:
                </div>

                <div class="account">
                    <p>{{ userInfo.account }}</p>
                    <div class="button" @click="logout">登出</div>
                </div>
            </div>


            <div class="config-item">

                <div class="config-title">
                    主题选择:
                </div>

                <div class="theme-list">
                    <div class="theme-item"
                         v-for="(value, name) in Theme"
                         :class="{
                             [value]: true,
                             'active': value === curTheme.current
                         }"
                         :key="value"
                         @click.stop="chooseTheme(value)">
                        <p>{{ name }}</p>
                    </div>
                </div>

            </div>

            <div class="config-item scale-config">
                <div class="config-title">
                    书页放大:
                </div>

                <el-slider
                    class="scale-select"
                    v-model="scale.current"
                    @change="scaleChange"
                    :show-tooltip="false"
                    :min="0"
                    :max="50"/>

                <div class="scale-indicator">
                    {{ scale.current }}
                </div>
            </div>

            <div class="config-item">

                <div class="config-title">
                    快捷键:
                </div>

                <div class="short-cut-key">
                    <div>返回: <kbd>ESC</kbd></div>
                    <div>向前翻页: <kbd>A</kbd> <kbd>S</kbd> <kbd>&#x2190;</kbd></div>
                    <div>向后翻页: <kbd>D</kbd> <kbd>F</kbd> <kbd>&#x2192;</kbd></div>
                    <div>开关目录: <kbd>Tab</kbd></div>
                    <div>全屏开关: <kbd>F11</kbd></div>
                    <div>快速选择书页中的图片: <kbd>W</kbd></div>
                </div>
            </div>


        </div>


    </div>


</template>

<script setup lang="ts">
import {Theme, themeStore} from "../../store/theme";
import {setLocalStorage} from "../../utils/localStorageUtil";
import {scaleStore} from "../../store/scale";
import {userStore} from "../../store/userStore.ts";
import {logoutApi} from "../../apis/login.ts";
import {useRouter} from "vue-router";

const curTheme = themeStore();
const scale = scaleStore();
const userInfo = userStore();

const router = useRouter();

function chooseTheme(theme: Theme) {
    const bodyClassList = document.body.classList;
    bodyClassList.remove(curTheme.current);
    curTheme.current = theme;
    bodyClassList.add(theme);
    setLocalStorage("theme", theme);
}

function scaleChange(val: number) {
    setLocalStorage("scale", val);
}


function logout() {
    logoutApi();
    router.push({
        name: "Login"
    });
}

</script>

<style scoped lang="less" src="./Config.less"/>