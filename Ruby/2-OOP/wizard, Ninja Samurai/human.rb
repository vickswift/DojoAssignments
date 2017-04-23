# The human class should have 4 attributes: strength, intelligence, stealth, and health. 
#
# Give the human a default value of 3 for strength, stealth and intelligence.
#
# Health should have a default value of 100. Add a new method called attack, which when invoked,
# should attack another object (i.e., decrease its health) if the object it is attacking inherits
#  from the Human class. Hint: you can check ancestors of a object by using .class.ancestors

class Human
  # your code here
  attr_accessor :strength, :intelligence, :stealth, :health

  def initialize(strength=3, stealth=3, intel=3, health=100)
    @strength = strength
    @stealth = stealth
    @intelligence = intel
    @health = health
  end

  def attack(obj)
    # check if the attacked object's class is Human or inherits from the Human class
    if obj.class.ancestors.include?(Human)
      obj.health -= 10
      # remember that we don't need to write "return" in ruby
      # stating true below will automatically return the boolean true
      true
    else
      false
    end
  end
end

h = Human.new
h2 = Human.new
puts h.attack(h2)
puts h.attack("Not a Human")
puts h2.health
