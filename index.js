// const laptop = {
//     brand: "Lenovo",
//     ram: 16,
//     storage: 512
// }
// console.log(Object.keys(laptop));

// const weather = {
//     city: "Darkhan",
//     temperature: 12,
//     isSunny: true,
// }
// console.log(Object.values(weather));

// const phone = {
//     brand: "Samsung",
//     model: "Galaxy",
//     storage: 256,
//     color: "Har"
// };
// const phoneArray = Object.keys(phone);
// console.log(phoneArray.length);

// const settings = {};
// const keys = Object.keys(settings)
// if (keys.length === 0) {
//     console.log("Тохиргоо оруулаагүй");   
// } else {
//     console.log("Тохиргоо оруулсан");
// }

// const steps = ["Эхлэл", "Дунд", "Төгсгөл"]
// steps.reverse()
// console.log(steps);


// const tags = "спорт,хөгжим,аялал";
// const salsan = tags.split(",");
// console.log(salsan);

// const playlist = {
//     name: "Өглөө",
//     songs: ["Нар", "Салхи", "Бороо"]
// };
// console.log(`${playlist.name} нэртэй жагсаалтад ${playlist.songs.length} дуу байна. Хоёр дахь дуу нь ${playlist.songs[1]}.`);

// const pets = [{name: "Банхар", type: "нохой"}, {name: "Мими" , type: "муур"}];
// console.log(`Нэр: ${pets[1].name}, төрөл: ${pets[1].type}.`);

// const classroom = {
//     name: "10A",
//     teacher: {name: "Оюун", subject: "Математик"}
// };
// console.log(`${classroom.name} ангийн багш ${classroom.teacher.name}. Заадаг хичээл: ${classroom.teacher.subject}.`);

// const store = {
//     branches: [{name: "Төв", hours:["09:00", "18:00"]}, {name: "Баруун", hours:["10:00", "20:00"]} ]
// }
// console.log(`${store.branches[1].name} салбар ${store.branches[1].hours[1]} цагт хаана.`);

// const user = {
//     email: "anu@example.com",
//     password: "pass123",
//     isBlocked: false,
// };
// const enteredEmail = "anu@example.com";
// const enteredPassword = "pass123";
// if (user.isBlocked) {
//     if (user.email === enteredEmail && user.password === enteredPassword) {
//         console.log("Амжилттай нэвтэрлээ");
//     } else { console.log("И-мэйл эсвэл нууц үг буруу");
//     }
// } else {
// console.log("Хандах эрх хаагдсан");
// }

// const user = {
//     role: "admin",
//     isActive: true,
// };
// if (user.isActive) {
//     switch (user.role) {
//         case "admin": console.log("Бүх мэдээллийг удирдана")
//         break;
//         case "editor": console.log("Мэдээлэл засна");
//         break;
//         default: console.log("Зөвхөн мэдээлэл үзнэ");
//     }
// } else {
//     console.log("Эрх идэвхгүй"); 
// }

// const visitor = {
//     age: 16,
//     isStudent: true,
// };
// const une = 12000;
// if (visitor.age < 12) {
//     visitor.ticketPrice = une - une * 50 /100;
// } else if (visitor.age >= 12 && visitor.isStudent) {
//     visitor.ticketPrice = une - une * 25 /100;
// } else {
//     visitor.ticketPrice = une;
// }
// console.log(visitor.ticketPrice);

// const order = {
//     subtotal: 80000 ,
//     coupon: "SAVE10",
//     couponUsed: false,
// }
// if (order.couponUsed) {
//     console.log("Купон ашиглагдсан");
// } else if (order.coupon === "SAVE10" && order.subtotal >= 50000) {
//     order.subtotal -= order.subtotal * 10 /100;
//     order.couponUsed = true
// } else {
//     console.log("Купон хэрэглэх боломжгүй");
// }

// console.log(`Төлөх дүн ${order.subtotal},`, order.couponUsed);


// const member = {
//     name: "Номин",
//     borrowedBooks: ["Атлас", "Нууц арал"],
//     hasOverdue: false,
// }
// if (member.hasOverdue) {
// } else if (member.borrowedBooks.length < 3) {
//     member.borrowedBooks.push("Оддын тухай");
//     console.log(member.borrowedBooks);
// } else {
//     console.log("Зээлэх номын хязгаарт хүрсэн");
// }

// const seats = ["Сул", "Захиалсан", "Сул"];
// const selectedIndex = 0;
// if (seats.length-1 < selectedIndex) {
// console.log("Суудлын дугаар буруу");
// } else if (seats[selectedIndex] === "Сул") {
//     seats[selectedIndex] = "Захиалсан";
//     console.log(seats);
// } else {
//     console.log("Энэ суудал захиалгатай");
// }

// const seats = ["Сул", "Сул", "Захиалсан", "Сул"];
// switch (seats[0] && seats[1]) {
//     case "Сул": seats[0] = "Захиалсан"; seats[1] = "Захиалсан"; console.log(seats);
//     break;    
//     default: console.log("Хоёр суудлыг хамт захиалах боломжгүй");
// }

// const warehouseA = {
//     stock: 12,
// };
// const warehouseB = {
//     stock: 5,
// };
// const transferAmount = 4;

// if (transferAmount > 0 && transferAmount <= warehouseA.stock) {
//     warehouseA.stock -= transferAmount;
//     warehouseB.stock += transferAmount;
//     console.log(warehouseA.stock, warehouseB.stock);
    
// } else {
//     console.log("Шилжүүлэх тоо буруу");
// }

// const sender = {
//     balance: 50000,
// };
// const receiver = {
//     balance: 10000,
// };
// const amount = 20000;
// const shimtgel = 500;

// if (amount > 0 && sender.balance >= (amount+shimtgel)) {
//     sender.balance -= amount + shimtgel;
//     receiver.balance += amount;
//     console.log(sender, receiver);
// } else {
//     console.log(sender, receiver)
// }

// const savings = {
//     balance: 180000,
//     goal: 200000,
// };
// const deposit = 30000;

// if (deposit > 0) {
//     savings.balance += deposit;
//     if (savings.balance >= savings.goal) {
//         console.log(`Зорилгодоо хүрлээ. ${savings.balance - savings.goal} төгрөгөөр давсан.`);
//     } else {
//         console.log(`Зорилгодоо хүрэхэд ${savings.goal - savings.balance} төгрөг дутуу.`);
//     }
// } else {}

//  const registration = {
//         documents: ["Иргэний үнэмлэх", "Цээж зураг"],
//         isPaid: false
//     }
// if (registration.documents.length === 2 && registration.isPaid) {
//     console.log("Бүртгэл баталгаажлаа");
// } else if (registration.documents.length < 2 || registration.isPaid) {
//     console.log("Баримт бичиг дутуу");
// } else {
//     console.log("Төлбөр төлөөгүй");
// }

// const learner = {
//     completedCourses: ["HTML", "CSS"],
//     isActive: true
// }
// if (learner.completedCourses.includes("HTML") && learner.completedCourses.includes("CSS") && learner.isActive) {
//     learner.canEnroll = true;
// } else {
//     learner.canEnroll = false;
// }

// console.log(learner.canEnroll);

// const result = {
//     theory: 85,
//     practice: 55,
// }
// if (result.theory >= 60 && result.practice >= 60) {
//     console.log("Тэнцсэн");
// } else if (result.theory < 60 && result.practice >= 60) {
//     console.log("Онолын шалгалтыг дахин өгнө");
// } else if (result.theory >= 60 && result.practice < 60) {
//     console.log("Дадлагын шалгалтыг дахин өгнө");
// } else {
//     console.log("Хоёр шалгалтыг дахин өгнө");   
// }

// const players = [{name:"Ану", score:100, time: 45}, {name:"Бат", score: 100, time: 42}];
// if (players[0].score > players[1].score) {
//     console.log(`${players[0].name} яллаа.`);
// } else if (players[0].score < players[1].score) {
//     console.log(`${players[1].name} яллаа.`);
// } else {
//     if(players[0].time < players[1].time) {
//         console.log(`${players[0].name} яллаа.`)
//     } else if(players[0].time > players[1].time) {
//         console.log(`${players[1].name} яллаа.`)
//     } else {console.log("Тэнцлээ");
//     }
// }

// const products = [
//   { name: "Дэвтэр", price: 3500 }, 
//   { name: "Үзэг", price: 2000 }, 
//   { name: "Баллуур", price: 1500 }
// ];
// if (products[0].price < products[1].price && products[0].price < products[2].price){
//  console.log(products[0].name);
// } else if (products[1].price < products[0].price && products[1].price < products[2].price ) {
//     console.log(products[1].name);
// } else if (products[2].price < products[0].price && products[2].price < products[1].price) {
//     console.log(products[2].name);    
// } else {
//     console.log("kkk");
// }

// const delivery = {
//     zone: "Захын бүс",
//     isExpress: true,
// }
// switch (delivery.zone) {
//     case "Төв": delivery.price = 3000;
//     break;
//     case "Захын бүс": delivery.price = 5000;
//     break;
//     case "Орон нутаг": delivery.price = 10000;
//     break;
//     default: console.log("Хүргэлтийн бүс буруу");
// }
// if (delivery.isExpress) {
//     delivery.price += 2000;
// } else {}
// console.log(delivery.price);

// const order = {
//     status: "Бэлтгэж байна",
//     isPaid: true, 
//     total: 45000,
// };
// if (order.status === "Хүлээгдэж байна" || order.status === "Бэлтгэж байна") {
//     order.status = "Цуцлагдсан";
//   if(order.isPaid) {
//     order.refundAmount = order.total;
// } else {
//     order.refundAmount = 0;
// };
// } else {}

// console.log(order.status , order.refundAmount);

// const purchase = {
//     daysSincePurchase: 5,
//     hasReceipt: true,
//     isDamaged: false,
// };
// if (purchase.daysSincePurchase <= 7) {
//     if (purchase.hasReceipt) {
//         if (purchase.isDamaged) {
//             console.log("Бараа гэмтэлтэй");     
//         } else {console.log("Буцаах боломжтой")}
//     } else {console.log("Баримт байхгүй");}
// } else{
//     console.log("Худалдан авснаас хойш 7 хоног хэтэрсэн байна.");  
// }

const cart = [{name: "Дэвтэр", quantity: 2, stock: 5}];
const addQuantity = 3;
if (addQuantity > 0 && cart[0].stock >= (cart[0].quantity + addQuantity)) {
    cart[0].quantity += addQuantity;
    console.log(cart);
} else {
    console.log("Тоо ширхгийг нэмэх боломжгүй");
}