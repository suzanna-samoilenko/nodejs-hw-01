import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), {
      encoding: 'utf-8',
    });

    return JSON.parse(data);
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};
