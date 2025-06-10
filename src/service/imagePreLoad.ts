import {PageItem} from "../model/pageModel";

/**
 * 预加载页面中的所有图片
 *
 * @param pages 书籍页面
 */
export function preloadImage(pages: PageItem[]) {
    for (let page of pages) {
        preloadImageByHtml(page.content);
    }
}

/**
 * 预加载 html 中的所有图片
 *
 * @param html html
 */
export function preloadImageByHtml(html: string) {
    const div = document.createElement('body');
    div.innerHTML = html;

    const images = div.querySelectorAll("img");
    for (let image of images) {
        preloadBySrc(image.currentSrc);
    }
}

/**
 * 预加载图片
 *
 * @param src 图片地址
 */
export function preloadBySrc(src: string) {
    if (src == null || src.length == 0) {
        return;
    }
    new Image().src = src;
}
