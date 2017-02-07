# Multiples
# Part 1
for num in range(1,1000):
    print num

# Part II
for some_int in range(5, 1000000):
    if some_int % 5 == 0:
        print some_int

# Sum List
a = [1, 2, 5, 10, 255, 3]
print "Sum of list 'a' is: %s" % sum(a)

# Average List
print "Average of list 'a' is: %s" % str(sum(a)/float(len(a)))
