module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      ts: {
        files: [
          'typings/tsd.d.ts',
          'dev/components/**/*.ts',
          'dev/app.ts'
        ],
        tasks: ['typescript']
      },
      html: {
        files: [
          ['dev/**/*.html'],
        ],
        tasks: ['copy']
      }
    },
    typescript: {
      base: {
        src: [
          'typings/tsd.d.ts',
          'dev/components/**/*.ts',
          'dev/app.ts'
        ],
        dest:'build',
        flatten:false,
        options: {
          target:'ES5',
          module:'commonjs',
          sourceMap:true
        }
      }
    },
    copy: {
      main: {
        files:[
          {
            expand: true,
            cwd: 'dev',
            src: '**/*.html',
            dest: 'build',
            flatten: false,
            filter: 'isFile'
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask("default", ["typescript"]);
  grunt.registerTask("build", ["typescript", "copy"]);
};
