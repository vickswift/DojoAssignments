def guess_number guess
    number = 25
    # your code here
    if guess == number
      puts "You got it!"
    elsif guess < number
      puts "Guess was too low"
    elsif guess > number
      puts "Guess was too high"
    end
end


guess_number 19
guess_number 33
guess_number 25
