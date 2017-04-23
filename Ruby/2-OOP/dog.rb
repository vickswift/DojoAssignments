require_relative "mammal"

class Dog < Mammal

  def pet count=1
    (@health += 5) * count
    self
  end

  def walk count=1
    (@health -= 1) * count
    self
  end

  def run count=1
    (@health = 10) * count
    self
  end

end

dog = Dog.new()

dog.walk(3).run(2).pet().display_health()
