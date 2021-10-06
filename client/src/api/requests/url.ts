import { post } from '..';
import { Url } from '../types/Url';

export const shortenUrl = (data: Url) => {
  return post('/url/shorten', data);
};
