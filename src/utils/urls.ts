// import from vendors
import _ from 'lodash/fp';

// imports from constants
import { CORE_API_URL } from '../constants/env';

export const coreApiUrl = (path: string) => [CORE_API_URL, path].map(_.trimChars('/')).join('/');
