class Mammal

  attr_accessor :health

  def initialize(health = 150)
    @health = health
  end

  def display_health
    puts "Health score is: #{@health}"
  end

end
