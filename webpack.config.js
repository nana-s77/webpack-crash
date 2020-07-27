const path = require('path'); //pathモジュールを取り込む

//resolve 絶対パスに変換する
//現在のディレクトリ(user/~)の名前とdistを連結してる
const outputPath =  path.resolve(__dirname,'dist'); 
console.log(outputPath);

module.exports = {
  entry: './src/index.js', //バンドル対象の設定
  output: {
    filename: 'main.js',
    path: outputPath,

  },
  devServer: {
    contentBase: outputPath,
  }

}