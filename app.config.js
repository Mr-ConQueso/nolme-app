export default ({ config }) => {
    return {
        ...config,
        extra: {
            ...config.extra,
            eas: {
                projectId: process.env.EAS_PROJECT_ID
            }
        }
    };
};