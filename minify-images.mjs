import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

(async () => {
    const pngFiles = await imagemin(['public/assets/images/png/**/*.png'], {
        destination: 'build/images/png',
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.8]
            }),
        ]
    });

    const svgFiles = await imagemin(['public/assets/images/svg/**/*.svg'], {
        destination: 'build/images/svg',
        plugins: [
            imageminSvgo()
        ]
    });

    return [pngFiles, svgFiles]
})().then((files) => console.log("Minified files", files)).catch(e => console.log("Error minifying images", e))