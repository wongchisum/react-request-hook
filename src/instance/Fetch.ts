import type {
  Service,
  Callback,
  FetchState,
  PartialState,
  Optional,
} from '../types';
import { isFn, isPromise } from '../utils/types';
import { DEFAULT_FETCH_STATE } from '../constance';

export default class Fetch<Response, Reason> {
  service: Optional<Service<Response>> = null;
  callback: Optional<Callback> = null; // 回调函数

  state: FetchState<Response, Reason> = {
    data: null,
    loading: false,
    error: null,
  };

  constructor(service: Service<Response>, callback?: Callback) {
    this.service = service;
    this.callback = callback;
  }
  // 更新请求状态
  private updateState(state: PartialState<Response, Reason>) {
    this.state = { ...this.state, ...state };
    isFn(this.callback) && this.callback();
  }

  // 请求前恢复起始状态
  private flushState() {
    this.updateState(DEFAULT_FETCH_STATE);
  }

  // 发起请求
  request() {
    this.flushState();
    let promise = isFn(this.service) ? this.service?.() : this.service;
    this.updateState({ loading: true });
    try {
      promise
        .then((response: Response) => {
          this.updateState({
            data: response,
          });
        })
        .catch((error: Reason) => {
          this.updateState({
            error,
          });
        })
        .finally(() => {
          this.updateState({ loading: false });
        });
    } catch (error: unknown) {
      console.error(error);
    }
  }

  // 中断请求
  pause() {}

  // 超时处理
}
