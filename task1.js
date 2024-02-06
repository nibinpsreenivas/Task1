var giftA=0;
var giftB=1;
var giftC=1;
var A=14;
var B=10;
var C = 9;

var subtotal= A*20+B*40+C*50;

var giftcost=0;
if(giftA==1)
{
    giftcost = giftcost +A*1
}
if(giftB==1)
{
    giftcost = giftcost +B*1
}
if(giftC==1)
{
    giftcost = giftcost +C*1
}

var shipping_fee=(Math.ceil((A/10))*5)+(Math.ceil((B/10))*5)+(Math.ceil((C/10))*5);



var Discount_amount=0;
var Discount_name;
var temp_Discount_amountA;
var temp_Discount_amountB;
var temp_Discount_amountC;
var temp_Discount_amountD;

var set;
if(subtotal>200)
{
   temp_Discount_amountA=10;
   Discount_amount = Math.max(Discount_amount,temp_Discount_amountA)
   
}
if(A>10)
{
    temp_Discount_amountB=((A*20)/100)*5;
    Discount_amount = Math.max(Discount_amount,temp_Discount_amountB)
}
if((A+B+C)>20)
{
    temp_Discount_amountC=(subtotal/100)*10;
    Discount_amount = Math.max(Discount_amount,temp_Discount_amountC)
}
if((A+B+C)>30 && (A>15 || B>15 || C>15))
{
    temp_Discount_amountD=0;
  if(A>15)
  {
    var set=A-15;
    temp_Discount_amountD = temp_Discount_amountD+ (((set*20)/100)*50)

  }
  if(B>15)
  {
    var set=B-15;
    temp_Discount_amountC = temp_Discount_amountD+ (((set*40)/100)*50)

  }
  if(C>15)
  {
    var set=C-15;
    temp_Discount_amountC = temp_Discount_amountD+ (((set*50)/100)*50)

  }
  Discount_amount = Math.max(Discount_amount,temp_Discount_amountD)
}

if(Discount_amount==temp_Discount_amountA)
{
    Discount_name="flat_10_discount";

}
else if(Discount_amount==temp_Discount_amountB)
{
    Discount_name="bulk_5_discount";
    
}
else if(Discount_amount==temp_Discount_amountC)
{
    Discount_name="bulk_10_discount";
    
}
else if(Discount_amount==temp_Discount_amountD)
{
    Discount_name="tiered_50_discount";
    
}

var total = subtotal - Discount_amount+shipping_fee+giftcost

console.log("Subtotal :"+subtotal)
console.log("discountName :"+Discount_name)
console.log("discountAmount :"+Discount_amount)
console.log("Shipping fee :"+shipping_fee)
console.log("giftwarpfee :"+giftcost)
console.log("total :"+total)





