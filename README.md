# controlpad

WindowPad functionality for Linux.

Built on top of [wmctrl][wmctrl] and [xwininfo][xwininfo].

[wmctrl]: http://tomas.styblo.name/wmctrl/
[xwininfo]: http://www.xfree86.org/4.2.0/xwininfo.1.html

The initial intent was to write this in `bash`. However, due to conflicts, it was decided to write this in `node.js`. The end goal is to rewrite the project in `bash`.

This also is the same reason for the poor structuring (technically `bin` should be talking to a class which moves windows).

## Getting Started

Verify Linux dependencies are installed:

- [xrandr][xrandr] - Used to determine current displays and their sizings
- [wmctrl][wmctrl] - Used to control window position and sizing
- [xprop][xprop] - Used to determine id of active window
- [xwininfo][xwininfo] - Used to determine current size and position of active window

Install the module globally via [npm][npm] and test it out:
```
# Install controlpad
npm install -g controlpad

# Resize active window to rightmost display to the top half
controlpad rightmost top-half
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## License
Copyright (c) 2013 Todd Wolfson

Licensed under the MIT license.
