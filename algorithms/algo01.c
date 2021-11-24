#include<stdio.h>
int main(){
	int type;
	
	printf("Please type your number for check FizzBuzz : "); //ป้อนตัวเลข ที่ต้องการตรวจสอบ
	scanf("%d",&type);
	
	type % 5 == 0 && type % 3 == 0 ? printf("FizzBuzz") : 	//ตรวจสอบว่าเป็นค่าที่หาร 3 กับ 5 ลงตัวได้หรือไม่
	 (type % 3 == 0 ? printf("Fizz") : 						//ตรวจสอบว่าเป็นค่าที่หาร 3 ลงตัวได้หรือไม่
	(type % 5 == 0 ? printf("Buzz") : 						//ตรวจสอบว่าเป็นค่าที่หาร 5 ลงตัวได้หรือไม่
	printf("Error : %d",type)));							//หากไม่ใช่ค่าที่ต้องการตรวจสอบ ให้แสดงค่าที่รับมา
	
	return 0;  
}
