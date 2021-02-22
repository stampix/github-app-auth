const core = require('@actions/core');
const { App } = require('@octokit/app')
try {
    const appId = core.getInput('appId');
    const installationId = core.getInput('installationId');
    const privateKey = core.getInput('privateKey');

    const app = new App({
        id: appId,
        privateKey,
    })
    const installationAccessToken = await app.getInstallationAccessToken({
        installationId: installationId,
    })

    core.setOutput("token", installationAccessToken);
} catch (error) {
    core.setFailed(error.message);
}