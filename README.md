

For development:

    npm install 

    npm start


# Deployment 

Deploy to gh pages at https://nieneb.github.io/participatory-tool/

In webpack.config.js change `publicPath: '/'` to  `publicPath: './'`

Then run: 

    npm run build
    npm run deploy