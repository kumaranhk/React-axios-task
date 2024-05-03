const BASEURL = "https://61470d9165467e0017384a2d.mockapi.io/users";

const getData = async () => {
  try {
    let res = await fetch(BASEURL);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export { getData };
