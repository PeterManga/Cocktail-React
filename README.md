# 🍹 Cocktail-React

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-6.20.1-CA4245?logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.6.2-5A29E4?logoColor=white)

## 📋 Descripción

Cocktail-React es una aplicación web desarrollada en React que permite explorar y descubrir recetas de cócteles. Utiliza la API [TheCocktailDB](https://www.thecocktaildb.com/) para obtener información detallada sobre una amplia variedad de cócteles.

## ✨ Características principales

- **Búsqueda de cócteles** por nombre, ingrediente o categoría
- **Visualización detallada** de recetas e ingredientes
- **Interfaz atractiva y responsiva** adaptada a diferentes dispositivos
- **Navegación fluida** entre diferentes secciones de la aplicación
- **Carrusel de cócteles** utilizando React Slick para mostrar las bebidas destacadas
- **Sistema de autenticación** con páginas de registro y login

## 🛠️ Tecnologías utilizadas

- **React 18**: Biblioteca JavaScript para construir interfaces de usuario
- **Vite**: Herramienta de compilación rápida para desarrollo frontend
- **React Router Dom**: Navegación y enrutamiento en la aplicación
- **Axios**: Cliente HTTP para realizar peticiones a la API
- **React Slick**: Carrusel de imágenes y contenido
- **CSS personalizado**: Estilos propios para una experiencia visual única

## 🚀 Instalación y uso

### Requisitos previos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para instalar

1. Clona el repositorio:
```bash
git clone https://github.com/PeterManga/Cocktail-React.git
```

2. Navega al directorio del proyecto:
```bash
cd Cocktail-React
```

3. Instala las dependencias:
```bash
npm install
# o
yarn install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

5. Abre tu navegador en la dirección: http://localhost:5173

## 📁 Estructura del proyecto

```
src/
├── assets/             # Imágenes y recursos estáticos
├── common/             # Componentes comunes reutilizables
│   ├── ButtonNav/      # Componentes de navegación
│   ├── CustomInput/    # Inputs personalizados
│   ├── Footer/         # Pie de página
│   ├── Header/         # Cabecera
│   ├── Neon/           # Efectos de estilo neón
│   ├── Searchbar/      # Barra de búsqueda
│   └── UserContext/    # Contexto para gestión de usuarios
├── media/              # Archivos multimedia
├── pages/              # Páginas principales
│   ├── Banner/         # Banner de la aplicación
│   ├── Body/           # Contenido principal
│   ├── Cocktails/      # Lista y detalles de cócteles
│   ├── Home/           # Página de inicio
│   ├── Login/          # Inicio de sesión
│   ├── Profile/        # Perfil de usuario
│   ├── Register/       # Registro de usuario
│   └── Routes/         # Configuración de rutas
└── services/           # Servicios para comunicación con la API
```

## 🌟 Funcionalidades destacadas

- **Búsqueda inteligente**: Encuentra cócteles por nombre, ingrediente o categoría
- **Filtrado avanzado**: Filtra por categorías como alcohólicos, sin alcohol, etc.
- **Información detallada**: Visualiza instrucciones de preparación, ingredientes y medidas
- **Interfaz atractiva**: Diseño con efectos neón y carruseles interactivos
- **Experiencia de usuario mejorada**: Navegación intuitiva y responsive

## 🤝 Contribuir

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Añadir una función increíble'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

Pedro Manga - GitHub: [PeterManga](https://github.com/PeterManga)

Enlace del proyecto: [https://github.com/PeterManga/Cocktail-React](https://github.com/PeterManga/Cocktail-React)
