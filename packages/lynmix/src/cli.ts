import cac from 'cac'
import path from 'path'
import { version } from './constant'

export async function cli(args: string[]) {
  const cli = cac('lynmix')

  cli
    .command('dev [root]', 'Start a development server', {
      ignoreOptionDefaultValue: true,
    })
    .action(async (root: string, flags: any) => {
      root = path.resolve(root || '.')
      console.log('root', root)
      console.log('flags', flags)
    })

  cli
    .command('routes [root]', 'List all routes', {
      ignoreOptionDefaultValue: true,
    })
    .action(async (root: string, flags: any) => {
      root = path.resolve(root || '.')
      console.log('root', root)
      console.log('flags', flags)
    })

  cli
    .command('build [root]', 'build for production', {
      ignoreOptionDefaultValue: true,
    })
    .action(async (root: string, flags: any) => {
      root = path.resolve(root || '.')
      console.log('root', root)
      console.log('flags', flags)
    })

  cli
    .command('start [root]', 'serve for production', {
      ignoreOptionDefaultValue: true,
    })
    .action(async (root: string, flags: any) => {
      root = path.resolve(root || '.')
      console.log('root', root)
      console.log('flags', flags)
    })

  // Listen to unknown commands
  cli.on('command:*', () => {
    console.error('Invalid command: %s', cli.args.join(' '))
    process.exit(1)
  })

  cli.help()
  cli.version(version)
  cli.parse(args, { run: false })
  await cli.runMatchedCommand()
}
