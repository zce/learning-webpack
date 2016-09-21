const path = require('path')

module.exports = {
  /**
   * 入口文件的基础路径，默认是process.cwd()
   * @type {String}
   */
  context: __dirname,
  /**
   * 打包起始入口
   * @type {String or Array or Object}
   * String: 单一入口文件
   *   entry: 'entry.js'
   * Array: 多个入口文件合并到同一文件
   *   entry: ['entry1.js', 'entry2.js', ...]
   * Object: 命名入口文件（多入口，多结果）
   *   entry: { main: 'entry1.js', other: 'entry2.js' }
   * 建议使用物理（绝对）路径
   */
  entry: './entry.js',
  /**
   * 打包结果输出选项
   * @type {Object}
   */
  output: {
    /**
     * 打包结果输出文件文件名
     * @type {String}
     * 可以是固定的值 or [var].js
     *   name: 入口定义的命名
     *   hash: 文件hash
     *   id: 文件ID（序号）
     */
    filename: 'bundle.js',
    /**
     * 输出文件所在目录路径
     * @type {String}
     * 建议为物理（绝对）路径
     */
    path: path.resolve(__dirname, 'build'),
    /**
     * 输出目录公开访问的基础路径
     * @type {String}
     */
    publicPath: 'build'
  }
}
