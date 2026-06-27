function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("fetching user data...");
    const UserData = await fetchUserData();
    console.log("User data fetch successfully");

    console.log("User data: ", UserData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
