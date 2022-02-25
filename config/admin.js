module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '00a2b0adeb8becee790966b96695cbf2'),
  },
});
