import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(
      path.resolve(PATH_DB),
      JSON.stringify(updatedContacts, undefined, 2),
      { encoding: 'utf-8' },
    );
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};
