import { ExecutorContext } from '@nx/devkit';

export abstract class Exporter {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(context: ExecutorContext) {}

  abstract export(): Promise<void>;
}
