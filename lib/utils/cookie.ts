export function setCookie(
  name: string,
  value: string,
  {
    maxAge,
    path,
  }: {
    maxAge: number;
    path: string;
  },
): void {
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}`;
}

export function removeCookie(name: string): void {
  document.cookie = `${name}=; max-age=0; path=/`;
}

export function getCookie(name: string): string | undefined {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return undefined;
}
