module.exports = {
  dev: {
    "client": "mysql",
    "connection": {
      "host": "127.0.0.1",
      "database": "cricDev",
      "user": "root",
      "password": " "
    },
    "pool": {
      "min": 2,
      "max": 10
    }
  }
};
