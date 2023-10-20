# Gis4Tech Anda UGR Application

This is a simple Next.js application created using Yarn. It uses Mapbox to display a map of a location based on a set of coordinates.

## Getting Started

To run this application, you'll need to have Node.js and Yarn installed on your computer. Once you have those installed, you can clone this repository and run the following commands:

```bash
yarn install
yarn dev
```

This will install the required dependencies and start the development server. You can then view the application by visiting http://localhost:3000 in your web browser.

## Building for Production

To build the application for production, you can run the following command:

```bash
yarn build
```

This will create a production-ready build of the application in the `out` directory.

To start the production server, you can run the following command:

```bash
yarn start
```

This will start the production server and make the application available at http://localhost:3000.

## Environment Variables

This application uses environment variables to store sensitive information such as API keys and secrets. The environment variables are stored in files named `.env` and `.env.local` in the root directory of the project.

Two important environment variables used in this application are:

- `NEXT_PUBLIC_MAPBOX_TOKEN`: This variable stores the Mapbox access token required to access the Mapbox API. It is a public variable because it is required by the client-side code to access the Mapbox API.
- `NEXT_PUBLIC_MAPBOX_STYLE`: This variable stores the Mapbox style URL used to style the map. It is also a public variable because it is required by the client-side code.

You can create your own `.env.local` file to set these variables to your own values. For example:

```bash
NEXT_PUBLIC_MAPBOX_TOKEN=sk.eyJ1IjoiZ2lzNHRlY2gtYW5kYS11Z3IiLCJhIjoiY2xkOGt6cDdiMDAwNDNvbW5rOXlhdnR5cyJ9.4VPWkYjCi62NXIEWACG3xA

NEXT_PUBLIC_MAPBOX_STYLE=mapbox://styles/mapbox/light-v10
```

Make sure to never share your access token or other sensitive information publicly, as it can lead to security issues.

That's it! With these commands and environment variables, you should be able to run, build, and deploy your Next.js application with ease.