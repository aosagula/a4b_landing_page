const isDev = process.env.NODE_ENV === "development";

// Terceros: GTM/Google Ads (gtag), Meta Pixel, Google Fonts y el embed de reservas de centralize.es.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net https://link.centralize.es`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://www.google.com.ar",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net https://www.facebook.com",
  "frame-src https://link.centralize.es https://td.doubleclick.net https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'"
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: csp }
        ]
      }
    ];
  }
};

export default nextConfig;
