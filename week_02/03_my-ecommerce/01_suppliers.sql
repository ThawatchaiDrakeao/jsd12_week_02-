-- Clear existing data to prevent duplication
TRUNCATE TABLE Suppliers RESTART IDENTITY CASCADE;

-- Mock Data for Suppliers
INSERT INTO Suppliers (supplier_id, name, contact_person, phone_number) VALUES
(1, 'Adidus' , 'Adidus Adidusdus', '999-999'),
(2, 'JoJo team', 'Giorno Giovanna', '010-010');
