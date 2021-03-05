# Shoe Shoppee

## 📃 About The Project

![Shoe Shoppee Landing Screen][screenshot]

An E-Commerece App to buy your favourite brand shoes and make your footwear collection grow.

More images are located inside [documentation directory](documentation/Screens.md)

---

### 💫 Features

#### Implemented

* [x] Shopping cart with checkout process.
* [x] User profile with user's previous orders.
* [x] Products pagination, search, place order, and review.
* [x] Seed data (products & users) from the seeder file present.
* [x] Admin functionality to manage and edit user, products and orders.

#### Not Implemented

* [ ] Responsive UI.
* [ ] Online Payment functionality.
* [ ] Delete a User without being admin.
* [ ] Filter products based on type and category.
* [ ] Image upload when adding a new Product by Admin.

### 🏗️ Built With

* ⚛️ [React](https://reactjs.org/)
* 🎨 [Ant Design](https://ant.design/)
* 📡 [NodeJs](https://nodejs.org/en/)
* 🗃 [MongoDB](https://www.mongodb.com/1)
* 🏷 [TypeScript](https://www.typescriptlang.org/)

---

## 🧩 Getting Started

To get a local copy up and running follow these simple steps.

### Starting the development server with docker 🐳

#### Prerequisites

Make sure you have Docker and docker-compose installed on your machine.

#### Steps to start the server

1. Add environment variable `MONGO_URI` in backend directory.
2. Run the following command in  the project directory itself.

      ```sh
      docker-compose up --build
      ```

3. Open <http://localhost:8080> to view it in the browser.

### Starting the development server without docker 📡

#### Prerequisites

Make sure you have Node and TypeScript installed on your machine.

> **_NOTE:_**
>
>_The project was made with node version 14.15._

#### Steps to start the server

1. Add environment files in both backend and frontend/web directories.

      `backend/.env` file

      ```env
      NODE_ENV = development
      PORT = 5000
      MONGO_URI = <URI>
      JWT_SECRET = <Secret Key>
      ```

      `frontend/web/.env` file

      ```env
      NODE_ENV = "development"
      REACT_APP_PRODUCTION_API_ENDPOINT = "production_url"
      REACT_APP_DEVELOPMENT_API_ENDPOINT = "http://localhost:5000"
      ```

2. To install all the dependencies run the following command in both backend and frontend/web directory.

      ```sh
      yarn install
      ```

3. Change the import in `index.css` file to default ant design styles or customize your css in the `theme.less` file and generate your css with the following command in the `frontend/web/src/styles` directory.

      ```sh
      lessc --js theme.less theme.css
      ```

      > **_NOTE:_** _Make sure you have installed `less` globally_

4. Run the following command in  the backend directory to start both server and React app.

      ```sh
      yarn dev
      ```

5. Open <http://localhost:3000> to view it in the browser.

<!-- ## 🚀 Deployment

The project is deployed on Heroku -> [link][deployedproject] -->

## 🔐 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgements

* Anish Kargoankar's article for React starter template -> [link to article][article]
* Brad Traversy's Proshop repository for the backend and frontend flow -> [link to repo][repo]

<!-- MARKDOWN LINKS & IMAGES -->
[screenshot]: documentation/images/1.png
[article]: https://dev.to/anishkargaonkar/structuring-react-application-for-scale-part-i-8bm
[repo]:https://github.com/bradtraversy/proshop_mern
<!-- [deployedproject]: -->
