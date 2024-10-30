module.exports = {
  apps: [
    {
      name: "Stebnev-Studio",
      port: 3000,
      exec_mode: "cluster",
      instances: "max", // Использует максимальное количество ядер
      script: "./.output/server/index.mjs", // Путь к вашему серверному файлу Nuxt
      env: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: 3000,
      },
    },
  ],
};
