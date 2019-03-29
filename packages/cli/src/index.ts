// https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript

/**
 * cooktest cli
 *
 * This is Test module
 */
const cli = {
  /**
   * Cli Test Functions
   * @param text text to display
   */
  test (text: string) {
    console.log('cli test20: ' + text)
  }
}

export = cli
// declare var module: any
// module.exports = cli
// test
