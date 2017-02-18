class Animal(object):
    """docstring for Animal."""
    def __init__(self, name):
        self.name = name
        self.health = 100
        # super(Animal, self).__init__()
        # self.arg = arg

    def walk(self, num):
        for value in range(num):
            self.health -= 1
        return self

    def run(self, num):
        for value in range(num):
            self.health -= 5
        return self

    def displayHealth(self):
        print "Name of Animal: {}, Health: {}".format(self.name, self.health)
        return self

animal = Animal("Cat")
animal.walk(3).run(2).displayHealth()


class Dog(Animal):
    def __init__(self,name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self, num):
        for value in range(num):
            self.health += 5
            return self

dog = Dog("Dog")
dog.walk(3).run(2).pet(1).displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self, num):
        for value in range(0,num):
            self.health -= 10
            return self

    def displayHealth(self):
        print "this is a dragon!"
        super(Dragon, self).displayHealth()


dragon = Dragon("Marvin")
dragon.walk(3).run(2).fly(2).displayHealth()
#
# animal.fly()
# animal.pet()
