import * as Keychain from 'react-native-keychain';

const TOKEN_KEY = 'auth-tokens';

export const storeTokens = async ({ accessToken, refreshToken }) => {
  const tokenData = JSON.stringify({ accessToken, refreshToken });
  await Keychain.setGenericPassword(TOKEN_KEY, tokenData);
};

export const getTokens = async () => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials && credentials.username === TOKEN_KEY) {
    return JSON.parse(credentials.password);
  }
  return null;
};

export const clearTokens = async () => {
  await Keychain.resetGenericPassword();
};
