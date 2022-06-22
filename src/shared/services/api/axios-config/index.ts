import axios from 'axios';
import { Environment } from '../../../environments';

const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

export { Api };
