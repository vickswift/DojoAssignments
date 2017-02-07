# Q1] Find and Replace
import re

str = "If monkeys like bananas, then I must be a monkey!"

for sub_string in re.finditer("monkey", str):
    print ("monkey found", sub_string.start(), sub_string.end())

print(str.replace("monkey", "alligator"))

# Q2] Min and Max
x = [2,54,-2,7,12,98]

print(min(x))

print(max(x))

# Q3] First and Last values
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[7]

y = [x[0], x[7]]
print y

# Q4] New List
v = [19,2,54,-2,7,12,98,32,10,-3,6]
v.sort()

print v

# Get and store -ve values in new list
newList = v[:2]
print newList

# Insert newList into original v array
v.remove(-3)
v.remove(-2)

v.insert(0, newList)
print v
