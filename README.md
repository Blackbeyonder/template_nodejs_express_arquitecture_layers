## Nodejs, layers
### node 20
```
project/
│
├── controllers/
│   ├── userController.js
│   └── productController.js
│
├── services/
│   ├── userService.js
│   └── productService.js
│
├── repositories/
│   ├── userRepository.js
│   └── productRepository.js
│
├── models/
│   ├── userModel.js
│   └── productModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── config/
│   └── database.js
│
├── utils/
│   └── logger.js
│
└── app.js

controllers/: Contiene los controladores que manejan las solicitudes HTTP y delegan la lógica de negocio a los servicios correspondientes.
services/: Define los servicios que encapsulan la lógica de negocio de la aplicación.
repositories/: Contiene los repositorios que se encargan de interactuar con la capa de datos, realizando operaciones CRUD en la base de datos.
models/: Define los modelos de datos que representan la estructura de los objetos de datos de la aplicación.
routes/: Define las rutas para el API y cómo se manejan las solicitudes HTTP, utilizando los controladores correspondientes.
middleware/: Contiene funciones de middleware que se utilizan para ejecutar operaciones adicionales antes o después de manejar las solicitudes HTTP, como la autenticación o el manejo de errores.
config/: Contiene archivos de configuración de la aplicación, como la configuración de la base de datos.
utils/: Contiene utilidades y funciones auxiliares utilizadas en toda la aplicación, como un logger para el registro de eventos.
app.js: El punto de entrada principal de la aplicación donde se configuran y se montan los componentes necesarios (como middleware, rutas, etc.).
```
