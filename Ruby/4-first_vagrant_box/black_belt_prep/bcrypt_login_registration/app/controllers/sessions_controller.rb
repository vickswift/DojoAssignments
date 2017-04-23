class SessionsController < ApplicationController
  def index
  end

  def register
    @user = User.create(user_params)

    if @user.valid?
      session[:user_id] = @user[:id]
      redirect_to "/dash"
    else
      # render json: user.errors
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end

  def login

    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user[:id]
      redirect_to "/dash"
    else
      # render text: "Invalid crenentials. Please try again"
      flash[:login] = "Invalid crenentials. Please try again"
      redirect_to :back   #Same as   'redirect_back(fallback_location: :back)'
    end

  end

  def logout
    session.delete(:user_id)
    redirect_to '/'
  end

  private

  def user_params
    params.require(:user).permit(:name,:email,:password,:password_confirmation)
  end
end
