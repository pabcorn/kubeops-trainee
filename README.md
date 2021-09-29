## Normal
1.  Describe Git branching strategies (Git-flow, single branch, feature branch etc.) which you have used and what purpose does it serves.
    - วิธีการทำแบบ single branch หรือ การต่อกิ่งของ branch main สร้างไฟล์ขนาดใหญ่ ลงใน branch เดียว  เพราะเคยใช้ในการสร้างเว็บไซต์เพื่อการศึกษาทางวิทยาลัย เรียบง่าย โคลนไฟล์รวดเร็ว
2.	How do you revert a commit that has already been pushed and made public? 
// คุณจะย้อนกลับหากมีความผิดพลาดในการทำงาน(ตัวโปรแกรม,ตัวเว็ป?) อย่างไร ถ้าหากทำการ push และ publish ออกไปแล้ว
    - git revert <ตามด้วย commit ที่เขียนไว้เป็น code ใน log> 
3.	How do you normally solve conflicts in a feature branch before merge?
// คุณจะแก้ไขปัญหาในกรณีที่เกิดความขัดแย้ง(?)ในการ feature branch ได้อย่างไร ก่อนจะทำการ รวมกลุ่ม,จัดกลุ่ม(merge)
    - แยกเป็นโฟลเดอร์ของแต่ละคน และเช็คดูว่ามันทดสอบแต่ละโฟลเดอร์ได้รึเปล่า? เพื่อลดปัญหาการขัดแย้งของไฟล์ที่เดียวกัน
4.	“200 OK” what does it mean and show use case this HTTP Status?
// "200 OK" ข้อความนี้มีความหมายว่าอย่างไร จงแสดง use case (ตัวอย่าง?) หาก http มีสถานะดังกล่าว
    - หมายถึงเครื่องของผู้ใช้ request การเข้าถึงเซิร์ฟเวอร์ประสบความสำเร็จ ซึ่งเซิร์ฟเวอร์ได้ reponse ตรงกับเครื่องผู้ใช้ และดำเนินการไปอีกขั้นตอนได้
5.	“201 Created” what does it mean and show use case this HTTP Status?
// "201 created" ข้อความนี้มีความหมายว่าอย่างไร จงแสดง use case (ตัวอย่าง?) หาก http มีสถานะดังกล่าว
    - คล้ายกับข้อ 4 แต่เมื่อรับ request สำเร็จ เซิร์ฟเวอร์จะเรียกทรัพยากร มาสร้างเว็บไซต์ เช่น หน้าต่างแรก (index.html)
6.	“301 Moved Permanently” what does it mean and show use case this HTTP Status?
//  "301 Moved Permanently" ข้อความนี้มีความหมายว่าอย่างไร จงแสดง use case (ตัวอย่าง?)

7.	“400 Bad Request” what does it mean and how to identify the problem?
//  "400 Bad Request" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร

8.	“401 Unauthorized” what does it mean and how to identify the problem?
//  "401 Unauthorized" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร

9.	“403 Forbidden” what does it mean and how to identify the problem?
//  "403 Forbidden" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร

10.	“404 Not Found” what does it mean and how to identify the problem?
//  "404 Not Found" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร

11.	“500 Internal Server Error” what does it mean and how to identify the problem?
//  "500 Internal Server Error" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร


12.	“502 Bad Gateway” what does it mean and how to identify the problem?
//  "502 Bad Gateway" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร

13.	“503 Service Unavailable” what does it mean and how to identify the problem?
//  "503 Service Unavailable" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร

14.	“504 Gateway Timeout” what does it mean and how to identify the problem?
//  "504 Gateway Timeout" ข้อความนี้มีความหมายว่าอย่างไร และเราสามารถหาปัญหาที่เกิดจากตัวนี้ได้อย่างไร

15.	What are Linux network tools do you use for troubleshooting network problems as well as usage scenarios for each tool?
//  คุณใช้ Linux network tools (excutable file พวก binary/.exe) อะไรในการแก้ไขปัญหา และวิธีแก้ปัญหาต้องทำยังไงบ้าง บอกเป็นลำดับขั้นตอนในการใช้ tools นั้นมา


## Intermediate
1.	Assume we have an application that is designed as below. Our application stopped responding due to an extremely high number of clients in some circumstances.
-	We have tried scaling a number of API Gateway and Service A nodes but it didn’t help. What are the possible problems that lies in our system in which components and how to fix them?
2.	How do you keep the docker image smallest as possible?
3.	What is the difference between overlay, bridge, host network in Docker? When to use each of them?
4.	How does the Kubernetes service talk to each other in the same cluster?
5.	What’s different between L2, L4, and L7 Load balancers? When to use it?

## Professional
1.	Assume that you are using a private cloud for your infrastructure. How do you manage logs, metrics, and alerts for your infrastructure and applications? Which tools do you use and why?
2.	How do you secure the following?
·  	application
·  	infrastructure
·  	data

3.	Base on your experience, how do you reduce your service downtime as much as possible during
·  	software upgrade
·  	database migration
·  	incident
4.	Configuration management
a. 	Which Among Puppet, chef, Ansible, or another is the best Configuration management tool?
b. 	Why?
c. 	Do you still need to use it if you already have docker-swarm or Kubernetes?
5.	How do you design your Kubernetes cluster? what DNS, CNI, ingression is being used? Why?
6.	How do you measure service quality to give the best experience to your customer? (SLO, SLA)
