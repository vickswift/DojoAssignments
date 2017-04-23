class NinjasController < ApplicationController
  def index
    if !session[:gold]
      session[:gold] = 0
      session[:activities] = []
    end

    @gold = session[:gold]
    @activities = session[:activities]
  end

  def show_message (won, amount, location)
    if won
      session[:gold] += amount
      obj = {won:true, sentence:"You won #{amount} from #{location}"}
      session[:activities].push(obj)
    else
      session[:gold] -= amount
      obj = {won:false, sentence:"You won #{amount} from #{location}"}
      session[:activities].push(obj)
    end
  end

  def calc_gold
    ninja_visited_locations = params[:location]

    case ninja_visited_locations
    when "farm"
      amount = rand(10..20)
      show_message true, amount, ninja_visited_locations
      redirect_to '/'
    when "cave"
      amount = rand(5..10)
      show_message true, amount, ninja_visited_locations
      redirect_to '/'
    when "house"
      amount = rand(2..5)
      show_message true, amount, ninja_visited_locations
      redirect_to root_path
    when "casino"
      amount = rand(0..50)
      dice_roll = rand(1..2)

      if dice_roll == 1
        show_message true, amount, ninja_visited_locations
      else
        show_message true, amount, ninja_visited_locations
      end

      redirect_to root_path
    else
    end

  end

end
