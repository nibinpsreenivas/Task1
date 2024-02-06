import math
A = int(input("quantity of product A"))
B = int(input("quantity of product B"))
C = int(input("quantity of product C"))
giftA = int(input("Do you want to wrap product A as gift 0-no 1-yes"))
giftB = int(input("Do you want to wrap product B as gift 0-no 1-yes"))
giftC = int(input("Do you want to wrap product C as gift 0-no 1-yes"))


subtotal = A * 20 + B * 40 + C * 50


giftcost = 0
if giftA == 1:
    giftcost += A * 1
if giftB == 1:
    giftcost += B * 1
if giftC == 1:
    giftcost += C * 1

shipping_fee = (math.ceil(A/10)) * 5 + (math.ceil(B/10) )* 5 + (math.ceil(C / 10) )* 5


Discount_amount = 0
Discount_name = ""
temp_Discount_amountA = 0
temp_Discount_amountB = 0
temp_Discount_amountC = 0
temp_Discount_amountD = 0

if subtotal > 200:
    temp_Discount_amountA = 10
    Discount_amount = max(Discount_amount, temp_Discount_amountA)

if A > 10:
    temp_Discount_amountB = (A * 20 / 100) * 5
    Discount_amount = max(Discount_amount, temp_Discount_amountB)

if (A + B + C) > 20:
    temp_Discount_amountC = (subtotal / 100) * 10
    Discount_amount = max(Discount_amount, temp_Discount_amountC)

if (A + B + C) > 30 and (A > 15 or B > 15 or C > 15):
    temp_Discount_amountD = 0
    if A > 15:
        set_A = A - 15
        temp_Discount_amountD += ((set_A * 20 / 100) * 50)

    if B > 15:
        set_B = B - 15
        temp_Discount_amountD += ((set_B * 40 / 100) * 50)

    if C > 15:
        set_C = C - 15
        temp_Discount_amountD += ((set_C * 50 / 100) * 50)

    Discount_amount = max(Discount_amount, temp_Discount_amountD)

if Discount_amount == temp_Discount_amountA:
    Discount_name = "flat_10_discount"
elif Discount_amount == temp_Discount_amountB:
    Discount_name = "bulk_5_discount"
elif Discount_amount == temp_Discount_amountC:
    Discount_name = "bulk_10_discount"
elif Discount_amount == temp_Discount_amountD:
    Discount_name = "tiered_50_discount"

total = subtotal - Discount_amount + shipping_fee + giftcost

print("Subtotal:", subtotal)
print("discountName:", Discount_name)
print("discountAmount:", Discount_amount)
print("Shipping fee:", shipping_fee)
print("giftwarpfee:", giftcost)
print("total:", total)
