class Bike(object):
    # price
    # max_speed
    # miles
    def __init__(self, price, max_speed, miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print "Bike cost: {}, Bike Speed: {}, Bike's total mileage: {}".format(self.price, self.max_speed, self.miles)
        return self

    def ride(self):
        print "Riding"
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing"
        self.miles -= 5
        return self


my_bike = Bike(300,'35mph')
your_bike = Bike(200,'50mph')
our_bike = Bike(1000,'75mph')

my_bike.ride().ride().reverse().displayInfo()
