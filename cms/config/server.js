module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'cms',
  // url: env('PUBLIC_URL', 'http://localhost:1337/cms'),
  //proxy: env('IS_PROXIED', true),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0f65e1d2360316c3fc9d4fe1e59683a7'),
    },
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
