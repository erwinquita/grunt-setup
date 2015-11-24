module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "app/less/*",
        tasks: ['less']
      }
    },
    // LESS task config
    less: {
        development: {
            files: {
                // destination         // source file
                "app/css/styles.css" : "app/less/styles.less"
            }
        }
    },
    // inside Gruntfile.js
    // Using the BrowserSync Server for your static .html files.
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "app/css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // register a default task.
grunt.registerTask('default', ['browserSync', 'watch']);
};
