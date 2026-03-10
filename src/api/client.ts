const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}${path}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Astro-Guestbook/1.0',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'No error body');
      console.error(`API Error: ${response.status} - ${url}`, errorText);
      throw new Error(`API Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error && !err.message.includes('status')) {
      console.error(`Network or Parsing Error: ${url}`, err.message);
    }
    throw err;
  }
}

export const api = {
  get: <T>(path: string, options?: RequestInit) => request<T>(path, { ...options, method: 'GET' }),
  post: <T>(path: string, body: any, options?: RequestInit) =>
    request<T>(path, { ...options, method: 'POST', body: JSON.stringify(body) }),
};
