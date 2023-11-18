#!/usr/bin/env node

import { Command } from 'commander';
import { name, version, description } from '../../../package.json';

import { init } from './index';

const program = new Command();

program
  .name(name)
  .version(version)
  .description(description)
  .option('-v, --verbose', 'Verbose output')
  .parse(process.argv);

export interface Config {
  verbose?: boolean;
  icons: {
    inputDir: string;
    outputDir: string;
    componentsOutputDir: string;
    storyFile: string;
  },
  illustrations: {
    inputDir: string;
    typeDir: string;
    storyFile: string;
  },
}

const options = program.opts<Config>();

init(options);