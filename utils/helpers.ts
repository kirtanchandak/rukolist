export function getURL(path: string) {
  const isProduction = process.env.NODE_ENV === "production";
  const url = isProduction
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";
  return `${url}${path}`;
}
