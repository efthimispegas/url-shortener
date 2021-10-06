import { get } from '..';

export const redirect = (code: string) => {
  return get(`/redirect/${code}`);
};
