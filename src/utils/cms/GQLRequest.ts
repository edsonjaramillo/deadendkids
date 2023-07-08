type GQLOptions = {
  cache?: RequestCache;
  variables?: any;
};

export class GQLRequest {
  constructor(private readonly endpoint: string) {}
  async request<T>(query: string, opts?: GQLOptions): Promise<T> {
    const variables = opts?.variables || {};
    const cache = opts?.cache || 'default';
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      cache: cache,
    });
    const json = await response.json();
    return json.data as T;
  }
}
