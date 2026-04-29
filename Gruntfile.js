module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-git-authors");

  grunt.initConfig({
    authors: {
      prior: [
        "Ward Cunningham <ward@c2.com>",
        "Nick Niemeir <nick.niemeir@gmail.com>",
      ],
    },

    coffee: {
      client: {
        expand: true,
        options: {
          transpile: { presets: ["@babel/preset-env"] },
          sourceMap: true,
        },
        src: ["client/*.coffee"],
        ext: ".js",
      },
    },
  });

  grunt.registerTask("build", ["coffee"]);
  grunt.registerTask("default", ["build"]);
};
