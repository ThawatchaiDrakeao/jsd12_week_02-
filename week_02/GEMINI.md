# Project Overview: Football Boots E-commerce & Restaurant Database

This directory contains a mix of resources, primarily focusing on the planning and initial implementation of a **Football Boots E-commerce** store for beginners, alongside a detailed **Restaurant/Burger Shop** database schema.

## Project Goal (Football Boots E-commerce)
The primary objective described in the root documentation is to create an e-commerce platform specifically for adult football players in Thailand. It aims to solve the problem of beginners not knowing which boot stud type (FG, AG, TF) is suitable for different pitch types (natural grass, artificial grass, or turf).

### Key Technologies
- **JavaScript:** Initial data structures for products and cart logic.
- **SQL (PostgreSQL):** Database schema and mock data (currently reflecting a restaurant template).
- **Excalidraw:** Used for business modeling, use-case diagrams, and ER diagrams.

---

## Directory Structure & Key Files

### E-commerce Documentation (Root)
- `01_my-ecommerce.md`: Problem statement and the proposed solution for the football boots store.
- `05_product-backlog.md`: Detailed feature list including product filtering, size checking, cart management, and admin tools.
- `06_bring-it-to-javascript.js`: A JavaScript implementation of the football boots data model and basic cart functionality.

### Design Diagrams
- `02_business-model-canvas.excalidraw`: Strategic management template for the business.
- `03_use-case-diagram.excalidraw`: Visualization of user interactions with the system.
- `04_er-diagram.excalidraw`: Entity-Relationship diagram (verify if this matches the Football or Restaurant schema).

### PostgreSQL Database (`postgresql/`)
*Note: Currently, these files implement a **Burger Shop/Restaurant** system, likely as a reference or a separate exercise.*
- `creat-tabeles.sql`: Defines tables for `Suppliers`, `Staff`, `Ingredients`, `MenuItems`, `RecipeItems`, `Orders`, and `OrderItems`.
- `01_suppliers.sql` to `07_order_items.sql`: Individual scripts to populate the restaurant database with mock data.
- `query.sql`: Contains sample queries for the restaurant data.

---

## Development Notes

### Current State
1. **Frontend/Logic:** Initial product list and cart logic are started in `06_bring-it-to-javascript.js` for the Football Boots project.
2. **Database:** The database schema in `postgresql/` currently represents a restaurant model. To align with the Football Boots project, a new schema for products (boots), sizes, and orders will be required.

### Next Steps (Inferred)
- [ ] Design the database schema for Football Boots (Products, Categories/Stud Types, Stock/Sizes, Orders).
- [ ] Transition the JavaScript logic to interact with a real database.
- [ ] Implement the high-priority features listed in `05_product-backlog.md`.

---

## Usage
To set up the current restaurant database (for reference):
1. Execute `postgresql/creat-tabeles.sql` in your PostgreSQL environment.
2. Run the numbered SQL scripts (01-07) to load the mock data.
3. Use `postgresql/query.sql` to test queries.
