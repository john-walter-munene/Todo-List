const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        projectsBoard: './src/projectsBoard.js',
        project: './src/project.js',
        task: './src/task.js',
        utilityFunctions: './src/utitilityFunctions.js',
        loadProjects: './src/loadProjects.js',
        loadTasks: './src/loadTasks.js',
        screenController: './src/screenController.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            scriptLoading: 'defer'
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test:  /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
  };