export type Service<Response> =
  | Promise<Response>
  | ((...args: unknown[]) => Promise<Response>);

export type Options = {
  immediately?: boolean; // 是否立即发起异步请求
};

export type FetchState<Response, Reason> = {
  data: unknown | Response;
  loading: boolean;
  error: unknown | Reason;
};

export type Callback = (...args: unknown[]) => void;

export type PartialState<Response, Reason> = Partial<
  FetchState<Response, Reason>
>;

export type Optional<Type extends unknown> =
  | Type
  | undefined
  | null
  | unknown
  | never;
