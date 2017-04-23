class TimesController < ApplicationController

  def main
    t = Time.now
    @current_date = t.strftime("%b %d, %Y")
    @current_time = t.strftime("%H:%M %p")

  end
end
