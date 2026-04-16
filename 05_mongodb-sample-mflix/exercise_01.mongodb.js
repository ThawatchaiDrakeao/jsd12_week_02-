use("sample_mflix");


//Fetch only one user from comments collection by _id = “5a9427648b0beebeb69579f5”.
// คำสั่งที่ใช้  db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") })

// db = คือ datebase เป็นโฟเดอร์ใหญ่ ข้อมูลที่เราจะใช้ในคำสั่ง

// comments = คือ collertion  เป็นโฟเดอร์ย่อย
//ข้อมูลที่เราจะใช้ในคำสั่ง

// findOne = Documet เป็นไฟล์ ที่เราจะใช้ในคำสั่ง

//Fields =   Fields  คือคอลัมข้อมูล 








db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") })  


