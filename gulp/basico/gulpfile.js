const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const antes1 = callback => {
    console.log('Tarefa antes 1')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa antes 2')
    return callback()
}

const fim = callback => {
    console.log('Tarefa fim')
    return callback()
}

function copy(callback) {

    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //     .pipe(gulp.dest('pastaB'))

    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))

    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copy,
    fim
)