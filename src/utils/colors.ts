/**
 * Useful class for coloring text in console output
 */
export class Colors {

  public static Backgrounds = {
    Black: '\x1b[40m',
    Blue: '\x1b[44m',
    Cyan: '\x1b[46m',
    Green: '\x1b[42m',
    Magenta: '\x1b[45m',
    Red: '\x1b[41m',
    White: '\x1b[47m',
    Yellow: '\x1b[43m',
  };

  public static Foregrounds = {
    Black: '\x1b[30m',
    Blue: '\x1b[34m',
    Cyan: '\x1b[36m',
    Green: '\x1b[32m',
    Magenta: '\x1b[35m',
    Red: '\x1b[31m',
    White: '\x1b[37m',
    Yellow: '\x1b[33m',
  };

  public static System = {
    Blink: '\x1b[5m',
    Bright: '\x1b[1m',
    Dim: '\x1b[2m',
    Hidden: '\x1b[8m',
    Reset: '\x1b[0m',
    Reverse: '\x1b[7m',
    Underscore: '\x1b[4m',
  };

  public static bright(text: string) {
    return Colors.System.Bright + text + Colors.System.Reset;
  }

  public static green(text: string) {
    return Colors.Foregrounds.Green + text + Colors.System.Reset;
  }

  public static red(text: string) {
    return Colors.Foregrounds.Red + text + Colors.System.Reset;
  }

  public static blue(text: string) {
    return Colors.Foregrounds.Blue + text + Colors.System.Reset;
  }

  public static black(text: string) {
    return Colors.Foregrounds.Black + text + Colors.System.Reset;
  }

  public static yellow(text: string) {
    return Colors.Foregrounds.Yellow + text + Colors.System.Reset;
  }

  public static magenta(text: string) {
    return Colors.Foregrounds.Magenta + text + Colors.System.Reset;
  }

  public static cyan(text: string) {
    return Colors.Foregrounds.Cyan + text + Colors.System.Reset;
  }

  public static white(text: string) {
    return Colors.Foregrounds.White + text + Colors.System.Reset;
  }

}
