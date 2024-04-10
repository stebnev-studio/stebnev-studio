module.exports = {
    apps: [
      {
        name: 'Stebnev-Studio',
        port: 3000,
        exec_mode: 'cluster',
        instances: 'max',
        script: './server/index.mjs'
      }
    ],
  }