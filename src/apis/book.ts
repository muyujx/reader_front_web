import {BookInfo, BookShelfList, PageItem} from "../model/pageModel";
import rq from "./request";
import {ContentsItem} from "../model/contentsModel";

/**
 * 获取书籍列表
 */
export function getBookInfoList(page: number, pageSize: number, search: string, tag: number): Promise<BookShelfList> {
    return rq.post({
        url: `/api/book/info/search/book`,
        body: {
            page,
            pageSize,
            search,
            tag
        }
    });
}


/**
 * 获取书页
 *
 * @param bookId 书籍编号
 * @param startPage 起始页
 * @param pageSize 获取书页数量
 */
export function getBookPageList(bookId: number, startPage: number, pageSize: number): Promise<PageItem[]> {
    return rq.post({
        url: '/api/book/page/html/page',
        body: {
            bookId,
            startPage,
            pageSize
        },
    });
}


/**
 * 获取书籍信息
 * @param bookId 书籍编号
 */
export function getBookInfo(bookId: number): Promise<BookInfo> {
    return rq.get({
        url: '/api/book/info/get/book/info',
        queryParam: {
            bookId
        }
    })
}

/**
 * 获取目录信息
 */
export function getContents(bookId: number): Promise<ContentsItem[]> {
    return rq.get({
        url: `/api/book/info/get/contents?bookId=${bookId}`
    });
}





