#!/usr/bin/env node
/* eslint-disable no-console */
'use strict'

async function main() {
  return import('./dist/cli.mjs').then(({ cli }) => cli(process.argv))
}

main()
  .then(() => process.exit(0))
  .catch(() => process.exit(1))
