class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :exception

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user
  
  private
  def check_login
    unless session[:user_id]
      flash[:error] = 'You must be logged in to visit that.'
      redirect_to '/'
    end
  end
end
