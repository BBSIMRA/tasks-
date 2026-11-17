const emails: string[] = [
    "abc@gmail.com",
    "xyz@gmail.com",
    "abc@gmail.com",
    "hello@gmail.com",
    "xyz@gmail.com"
];

const uniqueEmails = [...new Set(emails)];

console.log(uniqueEmails)