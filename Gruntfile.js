module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        options: {
          sourceMap: true
        },
        expand: true,
        flatten: false,
        src: ['**/*.coffee'],
        dest: 'js',
        ext: '.js'
      }
    },
    clean: {
      app: ['js']
    },
    mochaTest: {
      unit: {
        src: ['js/test/unit/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-mocha-test')

  grunt.registerTask('compile', 'Compiles coffee files', ['coffee'])
  grunt.registerTask('test', 'Run the tests', ['compile', 'mochaTest:unit'])

  grunt.registerTask('default', ['test'])
}
