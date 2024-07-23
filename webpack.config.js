const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // Main files.
        index: './src/index.js',

        // Console Application.
        projectsBoard: './src/backend/projectsBoard.js',
        project: './src/backend/project.js',
        task: './src/backend/task.js',
        storage: './src/backend/storage.js',

        // Utility files.
        utilityFunctions: './src/resources/utitilityFunctions.js',

        // Frontend files.
        loadProjects: './src/frontend/loadProjects.js',
        expandProjectStuff: './src/frontend/expandProjectStuff.js',
        projectWorkflow: './src/frontend/projectWorkflow.js',
        loadTasks: './src/frontend/loadTasks.js',
        expandTaskStuff: './src/frontend/expandTaskStuff.js',
        taskWorkflow: './src/frontend/taskWorkflow.js',
        screenController: './src/frontend/screenController.js',
        createStuff: './src/frontend/createStuff.js',
        editStuff: './src/frontend/editStuff',
        stuffSubmissions: './src/frontend/submitStuffToBoard.js',
        editsSubmissions: './src/frontend/editedStuffSubmissions.js',

        // Decoupler (Link Btn console app and DOM).
        decoupler: './src/front-back-link/decoupler.js',
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