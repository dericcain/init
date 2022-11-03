const baseUrl = process.env.NEXT_PUBLIC_VERCEL_UR;

type Body = Record<string, string | number | boolean | null | undefined>;

export async function post(url: RequestInfo, body: Body, headers: HeadersInit = {}) {
  const req = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      ...headers,
    }),
    body: JSON.stringify(body),
  });
  const res = await req.json();

  return {
    ok: req.ok,
    statusText: req.statusText,
    res,
  };
}
