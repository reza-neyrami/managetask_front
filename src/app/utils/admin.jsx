export function setAdmin(admindata) {
  if (admindata) {
    localStorage.setItem("admin", JSON.stringify(admindata));
  } else {
    localStorage.removeItem("admin");
  }
}

export function getAdmin() {
  try {
    return JSON.parse(localStorage.getItem("admin"));
  } catch (error) {
    // nothing
  }

  return null;
}


