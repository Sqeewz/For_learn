//ไฟล์นี้จะเป็นการสอนภาษา TypeScript เบื้องต้น แบบ ไม่เคยเขียนโปรแกรมมาก่อนเลย

//บทที่ 1: การประกาศตัวแปร (Variable Declaration)

//ใน TypeScript เราสามารถประกาศตัวแปรได้โดยใช้คำสั่ง let, const หรือ var

//ตัวอย่างการประกาศตัวแปรด้วย let
let Age: number = 25; // ตัวแปร Age เป็นชนิดตัวเลข (number)
let Name: string = "John"; // ตัวแปร Name เป็นชนิดข้อความ (string)
let IsStudent: boolean = true; // ตัวแปร IsStudent เป็นชนิดตรรกะ (boolean)

//ตัวอย่างการประกาศตัวแปรด้วย const
const Pi: number = 3.14; // ตัวแปร Pi เป็นค่าคงที่ (constant)

//ตัวอย่างการประกาศตัวแปรด้วย let
let City: string = "Bangkok"; // ตัวแปร City เป็นชนิดข้อความ (string)
let Temperature: number = 30; // ตัวแปร Temperature เป็นชนิดตัวเลข (number)

// การใช้งานตัวแปร (Using Variables)
console.log("Name: " + Name); // แสดงค่าของตัวแปร Name
console.log(`Age: ${Age}`); // แสดงค่าของตัวแปร Age


/* บทที่ 2: ฟังก์ชัน (Functions)
ฟังก์ชันคือกลุ่มของคำสั่งที่ทำงานร่วมกันเพื่อทำงานบางอย่าง โดยเราสามารถส่งค่าข้อมูลเข้าไปในฟังก์ชันและรับค่าผลลัพธ์กลับมาได้
หลักการประกาศฟังก์ชันใน TypeScript คือการระบุชนิดของพารามิเตอร์และชนิดของค่าที่ฟังก์ชันจะส่งกลับ

ตัวอย่างโครงสร้างฟังก์ชัน:
 function functionName(พารามิเตอร์1: type1, พารามิเตอร์2: type2): returnType {
     // คำสั่งภายในฟังก์ชัน
     return value; // ส่งค่ากลับ
 } */

// การประกาศฟังก์ชันใน TypeScript
function greet(person: string): string {
    return "Hello, " + person + "!";
}

console.log(greet("John")); // แสดงผล: Hello, John!

// ฟังก์ชันที่มีพารามิเตอร์หลายตัว
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10)); // แสดงผล: 15

/* บทที่ 3: โครงสร้างควบคุม (Control Structures)
โครงสร้างควบคุมใช้ในการกำหนดทิศทางการทำงานของโปรแกรม เช่น การตัดสินใจ (if-else) และการทำซ้ำ (loops)


    การใช้เงื่อนไข if-else
    วิธีการใช้เงื่อนไข if-else ใน TypeScript มีรูปแบบดังนี้:
if (เงื่อนไข) {
     คำสั่งถ้าเงื่อนไขเป็นจริง
} else {
     คำสั่งถ้าเงื่อนไขเป็นเท็จ
} 
*/
let score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}   

/*  การใช้ลูป for
    คำสั่งลูป for ใช้ในการทำซ้ำคำสั่งตามจำนวนครั้งที่กำหนด รูปแบบการใช้ลูป for มีดังนี้:
for (การเริ่มต้น; เงื่อนไข; การเปลี่ยนแปลง) {
    คำสั่งที่ต้องการทำซ้ำ
} 
*/
for (let i: number = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
    
}

/*  การใช้ลูป while
    คำสั่งลูป while ใช้ในการทำซ้ำคำสั่งจนกว่าเงื่อนไขจะเป็นเท็จ รูปแบบการใช้ลูป while มีดังนี้:
while (เงื่อนไข) {
    คำสั่งที่ต้องการทำซ้ำ
}
*/
let count: number = 0;
while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}   


/* บทที่ 4: อาร์เรย์ (Arrays)
อาร์เรย์คือโครงสร้างข้อมูลที่ใช้เก็บค่าหลายๆ ค่าในตัวแปรเดียวกัน โดยค่าต่างๆ ในอาร์เรย์จะถูกจัดเก็บเป็นลำดับ
และสามารถเข้าถึงค่าต่างๆ ได้โดยใช้ดัชนี (index) ซึ่งเริ่มต้นที่ 0 ใน TypeScript เราสามารถประกาศอาร์เรย์ได้ดังนี้:
let arrayName: type[] = [value1, value2, value3]; 
*/

let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // แสดงผล: Apple
fruits.push("Date"); // เพิ่มผลไม้ใหม่เข้าไปในอาร์เรย์
console.log(fruits.length); // แสดงผล: 4


/* บทที่ 5: อ็อบเจ็กต์ (Objects)
อ็อบเจ็กต์คือโครงสร้างข้อมูลที่ใช้เก็บค่าหลายๆ ค่าในรูปแบบของคุณสมบัติ (properties) และค่าของคุณสมบัติเหล่านั้น
โดยเราสามารถประกาศอ็อบเจ็กต์ได้ดังนี้:
let objectName: { property1: type1; property2: type2; } = { value1, value2 };
*/

let person: {
    city: string; name: string; age: number; isStudent: boolean 
} = {
    city: "NYC",
    name: "Alice",
    age: 22,
    isStudent: false
};

console.log(person.name); // แสดงผล: Alice
console.log(person.age); // แสดงผล: 22
console.log(person.isStudent); // แสดงผล: false

// การเพิ่มคุณสมบัติใหม่ให้กับอ็อบเจ็กต์
person.city = "New York";
console.log(person.city); // แสดงผล: New York


/* บทที่ 6: อินเตอร์เฟซ (Interfaces)
อินเตอร์เฟซคือโครงสร้างที่ใช้ในการกำหนดรูปแบบของอ็อบเจ็กต์ใน TypeScript
โดยเราสามารถประกาศอินเตอร์เฟซได้ดังนี้:
interface InterfaceName {
    property1: type1;
    property2: type2;
}
*/

interface Car {
    make: string;
    model: string;
    year: number;
}
