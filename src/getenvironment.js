async function getEnvironment() {
  const currentURL = window.location.href;
  const production = 'https://nitjtt.onrender.com';
  const nitjServer = 'https://xceed.nitj.ac.in';

  if (currentURL.includes('localhost') || currentURL.includes('nitjtt')) {
    return production;
  } else {
    try {
      const response = await fetch(nitjServer, { method: 'HEAD' });
      if (response.ok) {
        return nitjServer;
      } else {
        return production;
      }
    } catch (error) {
      console.error('NitjServer is not reachable, falling back to production:', error);
      return production;
    }
  }
}

export default getEnvironment;