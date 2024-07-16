async function checkServer(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    console.log("server is ok"); //incase server is ok it will
    return response.ok;

  } catch (error) {
   // console.log("server is not ok"); //incase server is not ok it will return false
    return false;
  }
}

async function getEnvironment() {
  const production = 'https://nitjtt.onrender.com';
  const nitjServer = 'https://xceed.nitj.ac.in';

  const currentURL = window.location.href;
   if (currentURL.includes('nitjtt')) {
    return Promise.resolve(production);
  } else {
    return checkServer(nitjServer).then(isNitjServerUp => isNitjServerUp ? nitjServer : production); }
}

export default getEnvironment;