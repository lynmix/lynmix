import cac from 'cac'
import path from 'path'
import { loadConfigFromFile } from 'vite'
import { VERSION } from './constants'

// global options
interface GlobalCLIOptions {
  '--'?: string[]
  r?: string
  c?: string
  open?: boolean
}

async function dev(root: string, options: GlobalCLIOptions) {
  root = path.resolve(root || '.')
  const config = await loadConfigFromFile(
    {
      mode: 'development',
      command: 'serve',
    },
    path.join(root, 'lynmix.config.ts'),
  )
  console.log(config)
  console.log('dev', root, options)
}

async function start(root: string, options: GlobalCLIOptions) {
  root = path.resolve(root || '.')
  console.log('start', root, options)
}
async function build(root: string, options: GlobalCLIOptions) {
  root = path.resolve(root || '.')
  console.log('build', root, options)
}
async function routes(root: string, options: GlobalCLIOptions) {
  root = path.resolve(root || '.')
  console.log('routes', root, options)
}

export async function cli(args: string[]) {
  const cli = cac('lynmix')

  cli
    .version(VERSION)
    .option('-r, --root <path>', 'Root path')
    .option('-c, --config <path>', 'Path to config file')
    .option('--open', 'Open UI automatically (default: !process.env.CI))')
    .help()

  cli
    .command('dev [root]', 'Start a development server', {
      ignoreOptionDefaultValue: true,
    })
    .action(dev)

  cli
    .command('routes [root]', 'List all routes', {
      ignoreOptionDefaultValue: true,
    })
    .action(routes)

  cli
    .command('build [root]', 'build for production', {
      ignoreOptionDefaultValue: true,
    })
    .action(build)

  cli
    .command('start [root]', 'serve for production', {
      ignoreOptionDefaultValue: true,
    })
    .action(start)

  // Listen to unknown commands
  cli.on('command:*', () => {
    console.error('Invalid command: %s', cli.args.join(' '))
    process.exit(1)
  })

  cli.parse(args, { run: false })
  await cli.runMatchedCommand()
}
