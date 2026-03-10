// 1. สร้างฐานข้อมูลสินค้าจำลอง (Product Catalog)
// ใช้ const เพราะข้อมูลโกดังหลักเราจะไม่ให้ตัวแปรอื่นมาทับมั่วซั่ว
const footballBoots = [
    {
        id: "B001",
        brand: "Nike",
        modelName: "Mercurial Vapor 15",
        soleplate: "FG", // เหมาะกับหญ้าจริง
        price: 8500,
        stock: 5
    },
    {
        id: "B002",
        brand: "Adidas",
        modelName: "Predator Accuracy",
        soleplate: "AG", // เหมาะกับหญ้าเทียม (ลูกค้ามือใหม่น่าจะชอบ)
        price: 5200,
        stock: 10
    },
    {
        id: "B003",
        brand: "Mizuno",
        modelName: "Morelia Neo IV",
        soleplate: "TF", // ร้อยปุ่ม สำหรับหญ้าเทียมสั้น
        price: 4900,
        stock: 3
    }
];