module.exports = ({ env }) => {
  return {
    connection: {
      client: env("DATABASE_CLIENT"),
      connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        // socketPath: process.env.INSTANCE_UNIX_SOCKET,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        ssl: false,
        charset: "utf8mb4",
        collation: "utf8mb4_unicode_ci",
      },
    },
  };
};
