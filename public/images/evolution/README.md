# Evolution images

The images were taken as [screenshots in Google Chrome developer tools](https://developer.chrome.com/docs/devtools/device-mode#screenshot) using a [custom device](https://developer.chrome.com/docs/devtools/device-mode#custom):
- Width: 1920
- Height: 1080
- Device pixel ratio: 1

Then they were converted into WEBP using [FFmpeg](https://www.ffmpeg.org/).

> [!TIP]
> Magic command to convert all PNGs into WEBPs:
> ```bash
> find . -name "*.png" -exec sh -c 'ffmpeg -yi "$1" "${1%.png}.webp"' _ {} \;
> ```
