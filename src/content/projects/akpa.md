---
title: Akpa
summary: A localhost tunnelling tool in Go that serves a folder on my machine through a public link, with passwords the server never sees.
layers: [Go, Networking, Infra]
year: 2026
status: live
featured: true
order: 1
links:
  - label: Live
    url: https://akpa.victorabuka.com
  - label: CLI repo
    url: https://github.com/Abuka-Victor/akpa-cli
  - label: Server repo
    url: https://github.com/Abuka-Victor/akpa-server
# TODO(victor): cover (card image), e.g. cover: /assets/work/akpa-cover.jpg + coverAlt
# TODO(victor): receipt photo/screenshot, e.g. receipt: { src: /assets/work/akpa-receipt.jpg, alt: "..." }
# TODO(victor): numbers, e.g. numbers: [{ label: "...", value: "..." }]
stack: [Go]
---

<!-- TODO(victor): "The problem" section. Why did you build Akpa? Add it as "## The problem". -->

<!-- TODO(victor): "Constraints" section. Add it as "## Constraints". -->

## How it works

Akpa has two halves, both written in Go: a CLI that runs on my machine and a server on the public internet. Point the CLI at a local folder and you get a public link. Requests to that link go to the server, which proxies them down to the CLI, which serves the files.

<!-- TODO(victor): diagram. Drop an image in public/assets/work/ and reference it here:
![Akpa request flow](/assets/work/akpa-diagram.svg) -->

### Passwords the server never sees

Links can be password-protected, and the server never learns the password. When someone opens a protected link, the browser gets a one-time nonce and solves a challenge with the password. The server passes that answer through untouched, and the CLI on my machine is the one that checks it.

That keeps the server stateless: it holds no passwords and no sessions. Failed attempts get throttled progressively, so guessing gets slower the more you guess.

<!-- TODO(victor): "## The hard part / what broke". What fought back while building this? -->
