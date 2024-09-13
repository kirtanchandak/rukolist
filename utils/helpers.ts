export const getURL = (): string => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process?.env?.NEXT_PUBLIC_VERCEL_URL &&
          process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== ""
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : process.env.VERCEL_URL && process.env.VERCEL_URL.trim() !== ""
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

  // Ensure trailing slash is removed
  url = url.replace(/\/$/, "");

  // Log the final URL (remove this in production)
  console.log("Final URL:", url);

  return url;
};

// Usage example
export const getCallbackURL = () => {
  return `${getURL()}/auth/callback`;
};
