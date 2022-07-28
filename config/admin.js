module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6deef34b40a5da92565fcaa5b4bf7412'),
  },
});
