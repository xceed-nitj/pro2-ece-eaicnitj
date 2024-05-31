// envUtils.js
async function getEnvironment() {
  const currentURL = window.location.href;
  const production = 'https://nitjtt.onrender.com';
  const nitjServer = 'https://xceed.nitj.ac.in';
  // const timeout = 5000; // 5 seconds timeout

  if (currentURL.includes('localhost')) {
      return production;
  } else if (currentURL.includes('nitjtt')) {
      return production;
  } else {
    // return nitjServer;
    return production;

      // try {
      //     // Create a promise that rejects in <timeout> milliseconds
      //     const timeoutPromise = new Promise((_, reject) =>
      //         setTimeout(() => reject(new Error('Request timed out')), timeout)
      //     );

      //     // Attempt to fetch the URL and race it against the timeout
      //     const response = await Promise.race([
      //         fetch(nitjServer, { method: 'HEAD' }),
      //         timeoutPromise
      //     ]);

      //     if (response.ok) {
      //         return nitjServer;
      //     } else {
      //         throw new Error('Server response not OK');
      //     }
      // } catch (error) {
      //     // If there is an error (including timeout), fallback to production
      //     return production;
      // }
  }
}

export default getEnvironment;
