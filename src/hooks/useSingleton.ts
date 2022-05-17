import { useRef } from 'react';
type Factory<Result> = (...args: unknown[]) => Result;

// 在hooks运行过程中创建单一的变量
export default function useSingleton<T>(factory: Factory<T>) {
    const instance = useRef(factory?.());
    return instance.current;
}