const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'net.mrconqueso.nolme.dev';
  }

  if (IS_PREVIEW) {
    return 'net.mrconqueso.nolme.preview';
  }

  return 'net.mrconqueso.nolme';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Nölme (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Nölme (Preview)';
  }

  return 'Nölme: Tolkien Language Learning';
};

export default {
  name: getAppName(),
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    package: getUniqueIdentifier(),
  },
};