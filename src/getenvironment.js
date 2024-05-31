// envUtils.js
async function getEnvironment() {
  const currentURL = window.location.href;
  const production = 'https://nitjtt.onrender.com';
  const nitjServer = 'https://xceed.nitj.ac.in';

  if (currentURL.includes('localhost')) {
      return production;
  } else if (currentURL.includes('nitjtt')) {
      return production;
  } else {
      try {
          // Check the response from nitjServer
          const response = await fetch(nitjServer, { method: 'HEAD' });
          if (response.ok) {
              return nitjServer;
          } else {
              throw new Error('Server response not OK');
          }
      } catch (error) {
          // If there is an error, fallback to production
          return production;
      }
  }
}

export default getEnvironment;
