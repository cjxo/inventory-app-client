# inventory-app-client
This is the front-end application for the LootBox inventory app. It connects to the
[inventory-app-server](https://github.com/cjxo/inventory-app-server), which allows users
to CREATE, READ, and DELETE items and categories in LootBox.

# Features
- Create, Read, and Delete categories interface given its *name* and *background_colour*
- Create, Read, and Delete items interface given its *name*, *price*, *quantity*, *type*, and *image* as PNG
- Displayed items in a horizontal scroller on the homepage
- Item Page that displays items; sort and filter feature; add item interface
- Category Page that displays categories; add category interface
- Since this is a toy application, we have a *Reset Button* that resets the state of the database by populating it with the default items and categories [as seen in the constants.js file in the server](https://github.com/cjxo/inventory-app-server/blob/main/utils/constants.js)
- Responsive UI

# Prerequisites
- Node.js
- NPM

Before running the client app, you need the **inventory-app-server** running as the client is just the UI.
Please follow the [installation instructions for the inventory-app-server](https://github.com/cjxo/inventory-app-server)
and get the server up and running first.

# Installation
Once the server is running locally on [http://localhost:3000/](http://localhost:3000/), we can now set the client up for running as follows
```bash
git clone git@github.com:cjxo/inventory-app-client.git
cd inventory-app-client
npm install
```

To start the client, run
```bash
npm run dev
```

Once Vite has started, you should see a similar-looking output
```bash
  VITE v6.1.0  ready in 325 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
The client app will be available at the address provided by 'Local'.

# Missing Features/TODOs
- [ ] Search Item

# Attribution
- [SVGRepo](https://www.svgrepo.com/)
- [Exo 2 Font](https://fonts.google.com/specimen/Exo+2)
