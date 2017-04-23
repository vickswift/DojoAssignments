require_relative "mammal"

class Lion < Mammal

  def initialize(health=170)
    @health = health
  end

  def fly count
    (@health -= 10)*count
    self
  end

  def attack_town count
    (@health += 50)*count
    self
  end

  def eat_humans count
    (@health += 20)*count
    self
  end

  def display_health
    puts "This is a lion"
    super
  end

end

lion = Lion.new()
puts lion.attack_town(3).eat_humans(2).fly(2).display_health()
