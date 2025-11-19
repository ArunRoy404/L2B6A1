## Question 3: Explain the difference between any, unknown, and never types in TypeScript.
## Answer: 

* যখন কোনো ভ্যারিয়েবল এর টাইপ আগে থেকে জানা থাকবেনা অথবা প্যারামিটার এ কি ধরণের ভ্যালু আসবে সেটা যদি জানা না থাকে তখন আমরা any টাইপ ব্যবহার করে থাকি । এতে কোড করার সময় কোনো এরর দেয়না ।  

উদাহরণ:
   ```bash
    let value: any = "arun"
    value = 200
    console.log(value.toUpperCase());
   ```


* unknown টাইপ any এর মতো ব্যবহার করা হয় যখন কোনো ভ্যারিয়েবল এর টাইপ আগে থেকে জানা থাকে না, 
তবে এই ক্ষেত্রে সেই ভ্যারিয়েবল  ব্যবহার করার আগে তার টাইপ যাচাই করে নিতে হয় । নাহলে এরর আসবে

উদাহরণ:
   ```bash
    let value: unknown = "arun";

    // value.toUpperCase();  Error

    if (typeof value === "string") console.log(value.toUpperCase());
   ``` 
* never টাইপ এর অর্থ হলো যেই টাইপ এর ভ্যালু কখনোই আসবে না। যখন কোনো ফাঙ্কশন কোনো ভ্যারিয়েবল অথবা কোনো ভ্যালু রিটার্ন করে না, তখন সেই ফাঙ্কশন এর রিটার্ন টাইপ নেভার দেয়া যায়, 

উদাহরণ:
   ```bash
    function makeUpperCase(value: string): never {
        console.log(value.toUpperCase())
    }
   ``` 