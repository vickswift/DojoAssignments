import random
def coinToss(num):
    recordList = []
    heads = 0
    tails = 0
    count = 0
    head_count = 0
    tail_count = 0
    for amount in range(num):
         flip = random.randint(0, 1)
         head_tail_str =  "It's a head!" if flip == 0  else  "It's a tail!"

         if (flip == 0):
              head_tail_str
              recordList.append("Heads")
              head_count = head_count + 1
         else:
              head_tail_str
              recordList.append("Tails")
              tail_count = tail_count + 1
         count = count + 1
         print "Attempt #{}: Throwing a coin... {} ... Got {} head(s) so far and {} tail(s) so far".format(count, head_tail_str, head_count, tail_count)


coinToss(15)
