import { localConfig } from './local.config';

type Config = {
  port: number;
  apiPrefix: string;
  mongoAddress: string;
  ssoApp: {
    authAddress: string;
    appKey: string;
    appSecret: string;
  };
};

export const config: Config = {
  port: 7411,
  apiPrefix: '/api/v1',
  ...localConfig,
};
