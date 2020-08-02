var imagemin = require("imagemin"),    // The imagemin module.
   webp = require("imagemin-webp"),   // imagemin's WebP plugin.
   jpeg = require("imagemin-mozjpeg"),
   png = require('imagemin-pngquant'),
   outputFolder = "./public/static/images/",            // Output folder
   PNGImages = "./original_images/*.png",         // PNG images
   JPEGImages = "./original_images/*.{jpg, jpeg}";        // JPEG images

(async () => {
   const files = await imagemin([JPEGImages], {
      destination: outputFolder,
      plugins: [
         jpeg({
            quality: 70
         })
      ]
   });
})();

(async () => {
   const files = await imagemin([JPEGImages], {
      destination: outputFolder,
      plugins: [
         webp({
            quality: 65
         })
      ]
   });
})();

(async () => {
   const files = await imagemin([PNGImages], {
      destination: outputFolder,
      plugins: [
         png({
            quality: [0.3, 0.5]
         })
      ]
   });
})();

(async () => {
   const files = await imagemin([PNGImages], {
      destination: outputFolder,
      plugins: [
         webp({
            quality: 65
         })
      ]
   });
})();
