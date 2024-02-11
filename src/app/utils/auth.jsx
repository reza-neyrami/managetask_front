export function setAuth(authData) {
  if (authData) {
    localStorage.setItem("auth", JSON.stringify(authData));
  } else {
    localStorage.removeItem("auth");
  }
}
export function removeAuth(authData) {
  if (authData) {
    localStorage.removeItem("auth");
  }
}

export function getAuth() {
  try {
    return JSON.parse(localStorage.getItem("auth"));
  } catch (error) {
    // nothing
  }

  return null;
}
