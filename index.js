const core = require('@actions/core');
const { createAppAuth } = require('@octokit/auth-app');

async function main() {
    const appId = core.getInput('appId');
    const installationId = core.getInput('installationId');
    const privateKey = core.getInput('privateKey');

    const auth = await createAppAuth({
        appId,
        installationId,
        privateKey
    })
    const installationAccessToken = await auth({ type: 'installation' })

    core.setOutput("token", installationAccessToken);
}

main()
    .catch(e => {
        core.setFailed(e.message);
    })