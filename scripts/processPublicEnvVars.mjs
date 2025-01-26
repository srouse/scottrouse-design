import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * Recursively read all files in a directory.
 * @param {string} dir - The directory to read.
 * @returns {string[]} - List of file paths.
 */
function getAllFiles(dir) {
    let files = [];
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files = files.concat(getAllFiles(fullPath));
        } else if (entry.isFile()) {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * Replace references to public process.env variables with their actual values.
 * @param {string} filePath - Path to the file to process.
 */
function replacePublicEnvVars(filePath) {
    const content = readFileSync(filePath, 'utf8');
    // Regex to match process.env.PUBLIC_* variables
    const envVarRegex = /process\.env\.(PUBLIC_\w+)/g;

    const updatedContent = content.replace(envVarRegex, (_, varName) => {
        const envValue = process.env[varName];
        if (envValue !== undefined) {
            console.log(`Replacing ${varName} with "${envValue}" in ${filePath}`);
            return `"${envValue}"`; // Replace with the actual value
        } else {
            console.warn(`Warning: ${varName} is not defined in process.env.`);
            return `"undefined"`; // Replace with "undefined" if not found
        }
    });

    writeFileSync(filePath, updatedContent, 'utf8');
}

/**
 * Main function to process a folder.
 * @param {string} folderPath - Path to the folder to process.
 */
function processFolder(folderPath) {
    const files = getAllFiles(folderPath);

    files.forEach((file) => {
        if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.html')) {
            replacePublicEnvVars(file);
        }
    });

    console.log('Processing complete.');
}

// Example usage
const folderPath = resolve('./dist/'); // Adjust the path to your folder
processFolder(folderPath);