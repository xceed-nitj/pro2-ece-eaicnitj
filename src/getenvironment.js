// envUtils.js
function getEnvironment() {
    const currentURL = window.location.href;
//const development = 'http://localhost:8010';
    const production = 'https://nitjtt.onrender.com';
     const nitjServer = 'https://xceed.nitj.ac.in';
  //for time being using nijtt server
    if (currentURL.includes('localhost')) {
      return production;
    } else if (currentURL.includes('nitjtt')) {
      return production;
    } else {
      // Default to a specific environment or handle other cases
      return nitjServer;
    }
  }
  
export default getEnvironment;
  
