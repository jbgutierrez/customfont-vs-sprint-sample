module.exports = function (grunt) {
  // Configure grunt
  grunt.initConfig({
    sprite:{
      all: {
        src: 'images/sprite/*.png',
        dest: 'images/sprite.png',
        retinaSrcFilter: ['images/sprite/*@2x.png'],
        retinaDest: 'images/sprite@2x.png',
        destCss: 'css/sprite.css'
      }
    }
  });

  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith');
};
