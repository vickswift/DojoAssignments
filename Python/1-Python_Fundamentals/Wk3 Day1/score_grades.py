import random

def grade():

    for value in range(0, 10):

        score = random.randint(60,100)

        if 60 <= score <70:
            print "Score: {}; Your grade is D".format(score)
        elif score <79:
            print "Score: {}; Your grade is C".format(score)
        elif score < 89:
            print "Score: {}; Your grade is B".format(score)
        elif score <=100:
            print "Score: {}; Your grade is A".format(score)
        else:
            print "You bombed the exam! Better luck next time!"

grade()



# Score and Grades
# Score: 97; Your grade is A
# Score: 76; Your grade is C
# Score: 61; Your grade is D
# Score: 95; Your grade is A
# Score: 97; Your grade is A
# Score: 88; Your grade is B
# Score: 85; Your grade is B
# Score: 78; Your grade is C
# Score: 97; Your grade is A
# Score: 81; Your grade is B
