const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  mongodbUri: 'mongodb://localhost:27017/test',
  port: env.PORT || 3000,
  host: env.HOST || '192.168.1.5',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
