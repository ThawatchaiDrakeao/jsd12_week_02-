
TRUNCATE TABLE Items RESTART IDENTITY CASCADE;

-- ข้อมูล Mock Data สำหรับรายการสินค้า (รองเท้าสตั๊ด)

INSERT INTO Items (item_id, name, price, category) VALUES
('B001', 'Nike Mercurial Vapor 15 (FG)', 8500.00, 'Nike'),
('B002', 'Adidas Predator Accuracy (AG)', 5200.00, 'Adidas'),
('B003', 'Mizuno Morelia Neo IV (TF)', 4900.00, 'Mizuno');