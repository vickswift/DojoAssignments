class Car(object):
    def __init__(self, price, speed, fuel, mileage, tax=0):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = tax

        if self.price > 10000:
            self.tax = .15
        else:
            self.tax = .12

        some_car = self.display_all()
        print some_car

    def display_all(self):
        return "Price: {}, Speed: {}, Fuel: {}, Mileage: {}, Tax: {}".format(self.price, self.speed, self.fuel, self.mileage, self.tax)


my_car = Car(5000, '50mph', 'Full', '20mpg')
your_car = Car(12000, '70mph', 'Half', '30mpg')
our_car = Car(7000, '90mph', 'Full', '20mpg')
thier_car = Car(18000, '70mph', 'Almost Full', '50mpg')
his_car = Car(2000, '50mph', 'Almost Empty', '20mpg')
her_car = Car(21000, '100mph', 'Empty', '30mpg')
