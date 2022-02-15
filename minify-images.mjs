import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

(async () => {
    const files = await imagemin(['public/assets/images/**/*.{jpg,png,svg}'], {
        destination: 'build/images',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            }),
            imageminSvgo()
        ]
    });

    return files
})().then((files) => console.log("Minified files", files)).catch(e => console.log("Error minifying images", e))