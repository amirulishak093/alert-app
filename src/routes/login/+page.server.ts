import { loginUser } from '$lib/services/user.service';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => {
	const user = event.locals.user;

	if (user) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async (event) => {
		const errors: Record<string, unknown> = {};

		const formData = Object.fromEntries(await event.request.formData());

		if (!formData.email) {
			errors.email = 'Email address is required';
		}

		if (!formData.password) {
			errors.password = 'Password is required';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, { data: formData, errors });
		}

		const { email, password } = formData as { email: string; password: string };

		const { error, token } = await loginUser(email, password);

		if (error) {
			return fail(401, {
				error
			});
		}

		// Set the cookie
		event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});

		throw redirect(302, '/');
	}
};
