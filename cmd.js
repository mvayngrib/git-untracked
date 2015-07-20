#!/usr/bin/env node

var path = require('path')
var gitUntracked = require('./')
var repoPath = path.resolve(process.argv[2] || '.')

gitUntracked(repoPath, function (err, files) {
  console.log(err || files.join('\n'))
})
