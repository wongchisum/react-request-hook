import { useRequest } from '../../src';

function request(): Promise<number> {
  return new Promise((resolve) => {
    const id = Math.ceil(Math.random() * 100);
    setTimeout(() => resolve(id), 1000);
  });
}

export default function Example() {
  const { loading, data, request: fetchData } = useRequest(request);

  return (
    <div>
      <div>Current id is:{typeof data === 'number' ? data : 'Unknown...'}</div>
      <button disabled={loading} onClick={fetchData}>
        {loading ? 'Loading' : 'Retry'}
      </button>
    </div>
  );
}
