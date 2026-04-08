# Harry Potter Characters (Angular)

Angular app that fetches Harry Potter character data from the public HP API and displays it in a Material UI grid with filtering and a details page.

## App description

This project is a COMP3133 lab test application built with Angular (standalone components + Angular Material). It retrieves character data from the HP API and renders:
- A **character list** (cards with image, name, house)
- A **house filter**
- A **character details** view (image on the left, info on the right)

**API used**: `https://hp-api.onrender.com/api`

## Features implemented

- **Fetch and display all characters** in a responsive card grid
- **Filter characters by House** (Gryffindor, Slytherin, Ravenclaw, Hufflepuff, No House, All)
- **Character details page** with:
  - Left image + right information layout
  - Wand info section
  - Back to list button
- **Loading spinner + error messages** for list/details fetches

## Screenshots


- **Character List**: shows all characters as cards + House filter dropdown  
 <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/4b4a0987-7e3f-4c76-b378-1cd5d1bb314b" />


- **Filtered by House**: list filtered to one house (e.g., Raveclaw)  
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/d3e4a58e-4ded-4b94-bb20-a0866cb33151" />


- **Character Details**: bigger centered card with photo on the left and details on the right  
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/541414de-af63-48dc-a317-8ee339bc0b56" />


## Instructions to run the project

### Prerequisites

- **Node.js**: Angular 21 requires **Node 20.19+** (or Node 22.12+).
- **npm**: comes with Node

### Install dependencies

```bash
npm install
```
### Run (development)

```bash
ng serve
```

Open:
- `http://localhost:4200/`

### Build

```bash
npm run build
```

### Unit tests

```bash
npm test
```
