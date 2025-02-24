## Local development 

For development:

    npm install 

    npm run dev

## testing deployment 

Deploy to gh pages at https://nieneb.github.io/participatory-tool/

Then run: 

    npm run build

By default, the build output will be placed at dist

    npm run preview 

It is important to note that vite preview is intended for previewing the build locally and not meant as a production server.
The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

## Deployment
Deployment is automatically configured when pushing to `main` 

The website is available on https://nieneb.github.io/participatory-tool/