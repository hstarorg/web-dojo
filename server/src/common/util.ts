import { createHash } from 'node:crypto';

export const util = {
  buildHash(key: string, len: number) {
    key = `${key}_${Date.now()}_${Math.random()}`;
    let hash = createHash('md5').update(key).digest('hex');
    return hash.substring(0, len || 12);
  },

  asyncBusinessFn(fn: Function) {
    return async (req: unknown, res: unknown, next: (err?: Error, data?: any) => void) => {
      fn(req, res, next).catch((err: any) => {
        next(err);
      });
    };
  },
};
