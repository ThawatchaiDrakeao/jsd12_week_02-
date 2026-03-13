
-- Clear existing data to prevent duplication
TRUNCATE TABLE Staff RESTART IDENTITY CASCADE;

-- Mock Data for Staff
INSERT INTO Staff (staff_id, first_name, last_name, role) VALUES
(1, 'A1', 'A2', 'Manager'),
(2, 'B1', 'B2', 'Department manager'),
(3, 'C1', 'C2', 'Employer')
