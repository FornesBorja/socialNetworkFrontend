const URL = 'https://social-network-fornesb.zeabur.app/'

export const registerUser = async (credentials) => {
	const request = await fetch(`${URL}/api/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	});

	const result = await request.json();

  return result;
};