import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const ACL_SOURCE = path.join('server_static', 'rbac', 'acl.yml');
const ACL_DEST = path.join('src', 'lib', 'rbac', 'acl.ts');

console.log('Generating ACL...');

const getRoles = (data: any) => {
	const roles = new Set<string>();
	roles.add('USER');

	const traverse = (node: any) => {
		if (Array.isArray(node)) {
			for (let item of node) {
				if (item === '*') item = 'GUEST';
				roles.add(item);
			}
		} else if (typeof node === 'object' && node !== null) {
			for (const key in node) {
				traverse(node[key]);
			}
		}
	};

	traverse(data);
	return roles;
};

try {
	const data = yaml.load(fs.readFileSync(ACL_SOURCE, 'utf8'), { json: true, filename: ACL_SOURCE });
	const jsonString = JSON.stringify(data, null, 2);
	const roles = getRoles(data);

	const output = `/**
 * Auto-generated ACL policy file.
 * Do NOT change directly this file, use "pnpm build:acl"
 * Source: ${ACL_SOURCE}
 */

export const policy = ${jsonString};
export const roles = ${JSON.stringify(Array.from(roles), null, 2)} as const;
export type Role = typeof roles[number];
export type Policy = typeof policy;
export type Resource = keyof Policy;
export type Action<R extends Resource> = keyof Policy[R];
`;

	fs.writeFileSync(ACL_DEST, output);
	console.log(`Policy successfully written to: ${ACL_DEST}`);
} catch (e) {
	console.error('Error generating ACL:', e);
	process.exit(1);
}
