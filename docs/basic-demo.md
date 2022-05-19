---
nav:
  title: 基本示例
  order: 3
---

# 基本示例

```tsx
import React from 'react';
import { useRequest } from 'request-hook';

function request(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

export default function Example() {
  const { data, loading } = useRequest<number, unknown>(request);

  if (loading) {
    return <div>Loading...</div>;
  } else if (typeof data !== 'number') {
    return <div>No data</div>;
  } else {
    return <div>{data}</div>;
  }
}
```
