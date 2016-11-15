// @flow

import fetch from 'isomorphic-fetch';
import qs from 'qs';

import isDevelopment from 'utils/isDevelopment';

const API_BASE = isDevelopment() ? '//localhost:8080' : '';

type CreateFetchRequestType = {
  endpoint: string,
  httpMethod: 'get' | 'GET' | 'post' | 'POST',
  headers: Object,
};

const createFetchRequest = ({ endpoint = '/', httpMethod = 'get', headers = {} }: CreateFetchRequestType): Function => {
  return ({ params = {} }: Object): Promise<*> => {
    return new Promise((resolve, reject) => {
      const method: string = httpMethod.toUpperCase();
      const options: { method: string, headers: Object, body?: string } = { method, headers };
      let url: string = `${API_BASE}${endpoint}`;

      if (method === 'GET') {
        const query: string = qs.stringify(params);
        url += `?${query}`;
      }

      if (method === 'POST') {
        options.body = JSON.stringify(params);
      }

      return fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            reject(response);
          } else {
            resolve(response.json());
          }
        })
        .catch(reject);
    });
  };
};

export default createFetchRequest;
