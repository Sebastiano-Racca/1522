import { policy, roles } from './acl';
import type { Action, Resource, Role } from './acl';

class RBAC {
	private acl = policy;

	private isGrantedRole<Res extends Resource>(
		role: Role,
		resource: Res,
		action: Action<Res>
	): boolean {
		if (!(resource in this.acl)) return false;
		if (!(action in this.acl[resource])) return false;
		if (this.acl[resource][action] == null) return false;
		if (this.acl[resource][action] == '*') return true;
		let roles: string[] = this.acl[resource][action] as string[];
		return roles.includes(role);
	}

	public isGranted<Res extends Resource>(
		role: Role | Role[],
		resource: Res,
		action: Action<Res>
	): boolean {
		if (typeof role === 'string') {
			return this.isGrantedRole(role, resource, action);
		}

		for (const r of role) {
			if (this.isGranted(r, resource, action)) {
				return true;
			}
		}
		return false;
	}
}

export default new RBAC();
