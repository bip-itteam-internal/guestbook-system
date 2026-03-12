import type { APIRoute } from 'astro';

export const ALL: APIRoute = async ({ request, params }) => {
  const API_BASE = "http://10.10.10.121:6969";
  const { path } = params;
  
  const url = new URL(request.url);
  // Construct the target URL for the backend
  const targetUrl = `${API_BASE}/${path}${url.search}`;

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        // Forward other relevant headers if necessary
        // 'Authorization': request.headers.get('Authorization') || '',
      },
      body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.text() : undefined,
    });

    const body = await response.arrayBuffer();

    return new Response(body, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
      },
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response(JSON.stringify({ error: 'Proxy failed', message: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
