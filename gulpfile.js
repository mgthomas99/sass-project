var autoprefixer = require("gulp-autoprefixer");
var cleancss = require("gulp-clean-css");
var concat = require("gulp-concat");
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("build", function () {
  return gulp.src("src/**/*.{css,sass,scss}")
      .pipe(sass.sync())
      .pipe(gulp.dest("build/"));
});

gulp.task("dist", ["build"], function () {
  return gulp.src("build/index.css")
      .pipe(concat("index.min.css"))
      .pipe(sourcemaps.init())
      .pipe(autoprefixer())
      .pipe(cleancss())
      .pipe(sourcemaps.write("/"))
      .pipe(gulp.dest("dist/"));
});

gulp.task("default", ["build", "dist"]);
