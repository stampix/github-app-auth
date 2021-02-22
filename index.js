const core = require('@actions/core');
const github = require('@actions/github');

try {
    const appId = core.getInput('appId');
    const installationId = core.getInput('installationId');
    const privateKey = core.getInput('privateKey');

    // TODO: mint the token


    core.setOutput("token", token);


} catch (error) {
    core.setFailed(error.message);
}