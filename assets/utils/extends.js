'use strict';
// Object Assign 及 polify 深度复制对象 详细用法参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
/**
 * 对象浅复制
 * @param {Object} 需要复制的对象类型数据
 * @return {Boolean} 返回复制后的对象;
 */
const assign = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];
        for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } }
    }
    return target;
};

/**
 * 检测对象是否为空
 * @param {Object} 需要检测的对象类型数据
 * @return {Boolean} 返回对象是否为空的布尔值;
 */

const isEmptyObject = function (obj) {
    let t;
    for (t in obj) {
        return !1;
    }
    return !0;
};

/**
 * 获取网页参数键值对
 * @return {Object} 返回Url上的参数转换的对象;
 */
const getUrlParams = function () {
    let urlParam = {};

    if (window.location.search) {
        let url = window.location.search.slice(1, window.location.search.length).split('&');
        url.map(function (item) {
            let value = item.toLocaleLowerCase().split('=');
            urlParam[value[0]] = decodeURIComponent(value[1]);
        });
    }

    if (window.location.hash) {
        let startIndex = window.location.hash.indexOf('?');
        let url = window.location.hash.slice(startIndex !== -1 ? startIndex + 1 : 2, window.location.hash.length).split('&');

        url.map(function (item) {
            let value = item.toLocaleLowerCase().split('=');
            urlParam[value[0]] = decodeURIComponent(value[1]);
        });
    }

    return !isEmptyObject(urlParam) ? urlParam : '';
};

/**
 * 对象转换成url编码键值对
 * @return {String} 将对象类型的转换成URL编码，仅支持对象层级为1级的 不支持#单页获取参数;
 */

const toUrlParams = function (arg) {
    let urlParam = '';
    for (let key in arg) {
        urlParam += (key + '=' + arg[key] + '&');
    }
    // return urlParam ? encodeURIComponent(urlParam.slice(0, (urlParam.length-1))) : '';
    return urlParam ? urlParam.slice(0, (urlParam.length - 1)) : '';
};

const isMobileNumber = telephone => {
    let mobileReg = /^1[358]\d{9}$/;
    return mobileReg.test(telephone);
};

/**
 * 检测数据类型
 * @param {*} obj
 */

const typeOf = obj => {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
};

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function colorToRgb(Colors) {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = Colors.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = '#';
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        // 处理六位的颜色值
        var sColorChange = [];
        for (var j = 1; j < 7; j += 2) {
            sColorChange.push(parseInt('0x' + sColor.slice(j, j + 2)));
        }
        return sColorChange;
    } else {
        return sColor;
    }
};

const rgbToHex = color => {
    const reg = /\d+/g;
    const [r, g, b] = color.match(reg);

    const hexR = parseInt(r).toString(16).padStart(2, '0').toUpperCase();
    const hexG = parseInt(g).toString(16).padStart(2, '0').toUpperCase();
    const hexB = parseInt(b).toString(16).padStart(2, '0').toUpperCase();

    // console.log(r, g, b);

    return `#${hexR}${hexG}${hexB}`;
};

// 将rgb表示方式转换为hex表示方式
function colorToHex(rgb) {
    var _this = rgb;
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
        var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
        var strHex = '#';
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            hex = hex < 10 ? 0 + '' + hex : hex;// 保证每个rgb的值为2位
            if (hex === '0') {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = _this;
        }

        return strHex;
    } else if (reg.test(_this)) {
        var aNum = _this.replace(/#/, '').split('');
        if (aNum.length === 6) {
            return _this;
        } else if (aNum.length === 3) {
            var numHex = '#';
            for (var j = 0; j < aNum.length; j += 1) {
                numHex += (aNum[j] + aNum[j]);
            }
            return numHex;
        }
    } else {
        return _this;
    }
}

/**
 * 取渐变色范围内颜色
 * @param {String} beginColor 开始颜色
 * @param {String} endColor 结束颜色
 * @param {Number} step 步长值(将颜色分割为几个阶级，返回几个数组)
 */
const randomColor = (beginColor, endColor, step) => {
    let i;
    let len = step;
    let colrArr = [];               // 存储颜色值

    // 将颜色值转为REB
    let [startR, startG, startB] = colorToRgb(beginColor);
    let [endR, endG, endB] = colorToRgb(endColor);

    // 计算开始的第一阶段的颜色值
    let sR = (endR - startR) / step;    // 总差值
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;

    for (i = 0; i < len; i++) {
        let hex = rgbToHex(`rgb(${parseInt(sR * i + startR)}, ${parseInt(sG * i + startG)}, ${parseInt(sB * i + startB)})`);
        colrArr.push(hex);
    }
    return colrArr;
};

const getTimeStr = function () {
    let dataNow = new Date();
    let dateYear = dataNow.getFullYear();
    let dateMonth = dataNow.getMonth() + 1;
    let dateDay = dataNow.getDate();
    dateMonth = dateMonth <= 9 ? `0${dateMonth}` : dateMonth;
    dateDay = dateDay <= 9 ? `0${dateDay}` : dateDay;

    let timeBeginStr = `${dateYear}-${dateMonth}-${dateDay}%2000:00:00`;
    let timeEndStr = `${dateYear}-${dateMonth}-${dateDay}%2023:59:59`;
    return {
        startTime: timeBeginStr,
        endTime: timeEndStr
    };
};
/**
 * 函数节流
 * @param {Function} method 
 * @param {Number} delay 
 * @param {Number} duration 
 */
const throttle = (method, delay, duration) => {
    var timer = null, begin = new Date();
    return function(){
        var context = this,
            args = arguments,
            current = new Date();
        clearTimeout(timer);
        if(current - begin >= duration){
            method.apply(context, args);
            begin = current;
        }else{
            timer = setTimeout(function(){
                method.apply(context, args);
            }, delay);
        }
    }
}

const ModalHelper = (function(bodyCls) {
    var scrollTop;
    return {
        afterOpen: function() {
            scrollTop = document.scrollingElement.scrollTop;
            console.log(scrollTop);
            document.body.classList.add(bodyCls);
            document.body.style.top = -scrollTop + 'px';
        },
        beforeClose: function() {
            document.body.classList.remove(bodyCls);
            console.log(scrollTop);
            // scrollTop lost after set position:fixed, restore it back.
            document.scrollingElement.scrollTop = scrollTop;
            document.body.style.removeProperty('top');
        }
    };
})('modal-open');

export {
    assign,
    isEmptyObject,
    getUrlParams,
    toUrlParams,
    isMobileNumber,
    typeOf,
    randomColor,
    getTimeStr,
    throttle,
    ModalHelper
};
