import loginData from '../fixtures/Logindata.json';

export function getEnvData() {
  const env = process.env.ENV || 'qa';
  const data = loginData[env];

  if (!data) {
    throw new Error(`❌ Invalid ENV: ${env}. Expected one of: ${Object.keys(loginData).join(', ')}`);
  }

  return {
    env,
    ...data
  };
}
