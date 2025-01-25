

export const storeCookie = (keyName, value) => {
  return localStorage.setItem(keyName, JSON.stringify(value));
}

export function getCookie(name) {
  const data = JSON.parse(localStorage.getItem("userDTO"));
  if (!data) return "false";
  if (name === "isUserLoggedIn") {
    const data = JSON.parse(localStorage.getItem("userDTO"));
    return data.isUserLoggedIn == "true";
  } else if (name === "accessToken") {
    const data = JSON.parse(localStorage.getItem("userDTO"));
    return data?.token;
  } else if (name === "userDTO") {
    const data = JSON.parse(localStorage.getItem("userDTO"));
    return data?.userDTO;
  } else if (name === "refreshToken") {
    const data = JSON.parse(localStorage.getItem("userDTO"));
    return data?.refresh_token;
  } else if (name === "role") {
    const data = JSON.parse(localStorage.getItem("userDTO"));
    const roleId = data?.userDTO?.role_id;
    return roleId === 1
      ? "Admin"
      : roleId === 2
      ? "User"
      : false;
  } else {
    return null;
  }
}


export const deleteCookie = (keyName) => {
  return localStorage.removeItem(keyName);
}