// 调用Object原型上的toString去判断类型，并进行截取处理，转化为小写
function getDataType(data: unknown) {
    return (Object.prototype.toString.call(data) as string)
        .slice(8, -1)
        .toLowerCase()
}


// 判断是否为函数类型
export function isFn(data: unknown): data is Function {
    return getDataType(data) === "function"
}

// 判断是否为Promise类型
export function isPromise<Type extends unknown>(data: unknown): data is Promise<Type> {
    return getDataType(data) === "promise"
}
