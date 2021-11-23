/**
 * 
 * @param message {string} 提示信息
 * @param code {number | string} 错误码
 * @param type type类型
 * @returns 错误信息
 * [还不懂，点这里](http://www.baidu.com)
 * ```js
 * // demo
 * getErrorMessage('demo', 100)
 * ```
 */
function getErrorMessage(message: string, code: number | string, type?: 'demo1' | 'demo2'): string {
    return message || '网络繁忙，请稍后' + code
}