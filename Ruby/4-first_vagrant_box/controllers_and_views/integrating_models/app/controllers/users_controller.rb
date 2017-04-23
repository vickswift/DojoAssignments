class UsersController < ApplicationController
  def index
    @users = User.all
    # render json: User.all
  end

  # def display
  #   render json: User.all
  # end

  def new
  end

  def show
   render json: User.find(params[:id])
 end

 def edit
    @user = User.find(params[:id])
  end

  def create
    # render json: params
    @user = User.create( first_name: params[:first_name], last_name: params[:last_name])
    redirect_to '/users'
  end

  def total
    render json: { total: User.count }
  end

end
