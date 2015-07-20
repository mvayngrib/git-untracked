
var path = require('path')
var proc = require('child_process')

module.exports = function getUntracked (repoPath, cb) {
  if (typeof repoPath === 'function') {
    cb = repoPath
    repoPath = process.cwd()
  }

  proc.exec('cd ' + repoPath + ' && git ls-files --others --exclude-standard', function (err, result) {
    if (err) return cb(err)

    var absPaths = result.trim().split('\n')
      .map(function (p) {
        return path.resolve(repoPath, p)
      })

    return cb(null, absPaths)
  })
}
