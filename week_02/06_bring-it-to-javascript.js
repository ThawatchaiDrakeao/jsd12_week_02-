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


let myCart = [
    { productId: "B001", quantity: 1 }, // ซื้อ Nike 1 คู่
    { productId: "B003", quantity: 2 }  // ซื้อ Mizuno 2 คู่
];

// 3. ฟังก์ชันคำนวณราคารวม (Calculate Total)
function calculateTotal(cartArray, productsArray) {
    let total = 0; // ตั้งค่าเริ่มต้นยอดบิลเป็น 0 บาท

    // วนลูป (Loop) หยิบของในตะกร้าขึ้นมาดูทีละชิ้น
    for (let i = 0; i < cartArray.length; i++) {
        let cartItem = cartArray[i]; 

        // เอา productId ในตะกร้า ไปค้นหาในโกดังว่าตรงกับรองเท้าคู่ไหน
        let matchedProduct = productsArray.find(function(shoe) {
            return shoe.id === cartItem.productId;
        });

        // ถ้าค้นหาเจอ ก็เอาราคาของรองเท้าคู่นั้น มาคูณกับ จำนวนที่ลูกค้าซื้อ
        if (matchedProduct) {
            total = total + (matchedProduct.price * cartItem.quantity);
        }
    }
    
    return total; // ส่งยอดบิลสุทธิกลับไป
}

let finalPrice = calculateTotal(myCart, footballBoots);

console.log("ตะกร้าของคุณมีสินค้า:", myCart);
console.log("-----------------------");
console.log("ยอดชำระเงินทั้งหมด:", finalPrice, "บาท");  
