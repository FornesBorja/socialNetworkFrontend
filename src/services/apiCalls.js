const URL = 'https://social-network-fornesb.zeabur.app'

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
export const loginUser = async (credentials) => {
	const request = await fetch(`${URL}/api/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	});

	const result = await request.json();

  return result;
}
export const getProfile = async (token) => {
	const response = await fetch(`${URL}/api/users/profile`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})

	return await response.json()
}

export const getUserPosts = async (token) => {
	try {
	  const response = await fetch(
		`${URL}/api/posts/own`,
		{
		  method: "GET",
		  headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		  },
		}
	  );
  
	  if (!response.ok) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  return data.data; // Ajusta según la estructura de la respuesta.
	} catch (error) {
	  console.error("Error fetching user posts:", error);
	  throw error;
	}
  };

  export const getAllPosts = async (token) => {
	try {
	  const response = await fetch(
		`${URL}/api/posts/`,
		{
		  method: "GET",
	
		}
	  );
  
	  if (!response.ok) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  return data.data;
	} catch (error) {
	  console.error("Error fetching user posts:", error);
	  throw error;
	}
  };
  export const getFollowingPosts = async (token) => {
	try {
	  const response = await fetch(
		`${URL}/api/posts/following`,
		{
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		  },
		}
	  );
  
	  if (!response.ok) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error("Error fetching user posts:", error);
	  throw error;
	}
  };

export const likePost = async (postId, token) => {
	try {
	  const response = await fetch(
		`${URL}/api/posts/like/${postId}`,
		{
		  method: "PUT",
		  headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		  },
		}
	  );
  
	  if (!response.ok) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  return data.data; 
	} catch (error) {
	  console.error("Error liking the post:", error);
	  throw error;
	}
  };
  
export const createPost = async (postData, token) => {
	try {
	  const response = await fetch(`${URL}/api/posts`, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		  Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(postData),
	  });
  
	  if (response.ok) {
		console.log("Post created succesfully");
		return true;
	  } else {
		console.error("Error creating the post");
		return false;
	  }
	} catch (error) {
	  console.error("Network error", error);
	  return false;
	}
  };

  export const updateProfile = async (data, token) => {
	const response = await fetch(`${URL}/api/users/profile`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(data)})
		
	return await response.json()
}
  