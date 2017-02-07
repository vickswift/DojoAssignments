# Odd/Even
def odd_even():
    count = 0
    for item in range(1,2000):
        count = count + 1
        if (item%2 == 0):
            print "Iteration #{} is an EVEN number".format(count)
        else:
            print "Iteration #{} is an ODD number".format(count)

odd_even()

# Multiply
def multiply(someList, num):
    newList = []
    for value in someList:
        value = value * num
        newList.append(value)
    return newList


product = multiply([2,4,5], 3)
# print product

# Hacker Challenge:
def layered_multiples(multiply):
    outerArr = []
    for i in multiply:
        innerArr = []
        for i in range(0,i):
            innerArr.append(1)
            outerArr.append(innerArr)
    return outerArr

print(layered_multiples([2,4,5]))
