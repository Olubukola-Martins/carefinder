/** @type {import('next').NextConfig} */

// Configurations for development
/** @type {import('next').NextConfig} */
const devNextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    mongodb_username: "Jennifer",
    mongodb_password: "Jennifer",
    mongodb_clustername: "Cluster24",
    google_email: "carefindermail@gmail.com",
    google_password: "wgmn ozuk mrzt hmnt",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "P5jLCK7jgs9CXb02vlO6uoCJjbcvIUanV25SUPrZcQ=",
    API_KEY: "AIzaSyAugTk1Ryw6v2v3WWykQ-T3l3LilldyBXY",
    GOOGLE_ID:
      "901539098524-e8v0745udd8sgdn61fa4v1j3e40pn2mc.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    FACEBOOK_ID: "191596636867507",
    FACEBOOK_SECRET: "c54a563b8afd01894a775aaa892f97ff",
  },
};

module.exports = () => {
  return devNextConfig;
};
