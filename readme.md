# git-untracked

get files in a directory that are not tracked by git

[![NPM](https://nodei.co/npm/git-untracked.png)](https://nodei.co/npm/git-untracked/)

## Usage

### Command line

```bash
git-untracked
```

### From JS

```js
var gitUntracked = require('git-untracked')
gitUntracked('.', function (err, absFilePaths) {
  console.log(absFilePaths.join('\n'))
})
```
