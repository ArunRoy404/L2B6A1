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


   ---
   ---




## Question 5: Provide an example of using union and intersection types in TypeScript.
## Answer: 

* union টাইপ এর মাদ্ধমে আমরা একটি ভ্যারিয়েবল এ একাধিক টাইপ যোগ করতে পারি। union এর ফলে আমাদের ভ্যারিয়েবল দেয়া টাইপ এর মধ্যে যেকোনো টাইপ এর হলেই হবে ।
  
উদাহরণ:
   ```bash
    let value: string | number;

    value = "arun"
    value = 100

    value = true; // Error
   ``` 


* intersection এর ফলে একটি ভ্যারিয়েবল এ যতগুলো টাইপ দিতে হবে, সবগুলো টাইপ ই ওই ভ্যারিয়েবল এর মধ্যে থাকতে হবে ।  কোনো টাইপ বাদ পড়া যাবে না । 
  
উদাহরণ:
   ```bash
     type nameType = {
      name: string;
    };
    
    type ageType = {
      age: number;
    };
    
    type personType = nameType & ageType;
    
    const person: personType = {
      name: "Arun",
      age: 23
    };

    console.log(person);
   ``` 

--- 