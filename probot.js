module.exports = robot => {
  robot.on('issues.opened', async context => {
    // context.github is an authenticated @octokit/rest client!
    context.github.issues.getForRepo(context.repo())

    // bots can talk
    context.github.issues.createComment(context.issue({body: 'Hello World!'}))
  })
}