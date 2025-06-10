/**
 * 从带有 px 后缀的字符串中提取数值
 *
 * @param str 带有 px 的字符串 比如: 10px
 */
export function parsePxInt(str: string): number {
    str.replace("px", "");
    str = str.trim();
    return parseInt(str);
}

export function getLeft(el: Element): number {
    // @ts-ignore
    return parseInt(el.style.left);
}

export function getBottom(el: Element): number {
    // @ts-ignore
    return parseInt(el.style.bottom);
}

export function getIntAttr(el: Element, key: string): number {
    const val = el.getAttribute(key);
    if (val == null) {
        return 0;
    }
    return parseInt(val);
}