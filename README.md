# controlpad [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

WindowPad functionality for Linux.

The initial intent was to write this in `bash`. However, due to conflicts, it was decided to write this in `node.js`. The end goal is to rewrite the project in `bash`.

This also is the same reason for the poor structuring (technically `bin` should be talking to a class which moves windows).

## Getting Started

Verify Linux dependencies are installed:

- [xrandr][xrandr] - Used to determine current displays and their sizings
- [wmctrl][wmctrl] - Used to control window position and sizing
- [xprop][xprop] - Used to determine id of active window
- [xwininfo][xwininfo] - Used to determine current size and position of active window

[xrandr]: http://linux.die.net/man/1/xrandr
[wmctrl]: http://tomas.styblo.name/wmctrl/
[xprop]: http://www.xfree86.org/current/xprop.1.html
[xwininfo]: http://www.xfree86.org/4.2.0/xwininfo.1.html

Install the module globally via [npm][npm] and test it out:
```
# Install controlpad
npm install -g controlpad

# Resize active window to rightmost display to the top half
controlpad rightmost top-half
```

[npm]: http://npmjs.org/

## Documentation
`controlpad` presents a large set of semantic configurations for resizing/relocating the active window.

```shell
controlpad - WindowPad functionality for Linux
Usage: controlpad {{display}} {{size}}
    display - Display to move window to
        - leftmost, rightmost, topmost, bottommost - Absolute displays
        - current - Keep window on same display
    size - Size to adjust window to
        - left-half, right-half, top-half, bottom-half - Half displays
        - top-left-quarter, top-right-quarter, bottom-left-quarter, bottom-right-quarter - Quarter displays
        - top-left-eighth, top-right-eighth, bottom-left-eighth, bottom-right-eighth - Eighth displays
        - full - Take up entire screen (not maximized)
        - center - Center window in display (sized to half-by-half)
```

## Examples
```shell
# Resize active window to center of screen
controlpad current center

# Move window to rightmost display
controlpad rightmost center

# Move window to left half of current display
controlpad current left-half
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## License
Copyright (c) 2013 Todd Wolfson

Licensed under the MIT license.
