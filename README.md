# Phoenix application in Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/benvp/phoenix-gitpod)

Sample application to develop Phoenix applications in Gitpod.

## What's in the box?

1. Dockerfile based upon `gitpod/workspace-full`.
2. PostgreSQL 14
3. Compiles ElixirLS extension with the current Erlang/Elixir version to properly autocomplete when using the `use` macro. The extension is installed using a task in `.vscode/tasks.json`. Currently there is no other way to do this until you can define extensions via a local file path in `.gitpod.yml`.

## Files to look at

1. `.gitpod.yml`
2. `.gitpod.Dockerfile`
3. `gitpod/install_extensions.sh`
4. `.vscode/tasks.json`
