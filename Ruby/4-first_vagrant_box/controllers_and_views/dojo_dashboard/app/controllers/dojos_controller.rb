class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
    # render json: @dojos
  end

  def new
    @dojo = Dojo.new    #You could omit this instantiation of @dojo and you should be fine
  end

  def create
    # Dojo.create(dojo_params)
    # redirect_to "/dojos"

    ##### The lines above do same as below   ######
    @dojo = Dojo.new(dojo_params)

    if @dojo.save
      redirect_to "/dojos", notice: "You have successfully created a Dojo!"   # Same as 'redirect_to root_url
    else
      flash[:errors] = @dojo.errors.full_messages
      redirect_to :back   #same as 'redirect "/dojos/new". i.e. from whence we came from, the dojo new page to create 'New Dojo'
    end
  end

  def edit
    @dojo = Dojo.find(params[:id])
    # render json: params
  end

  def show
    @dojo = Dojo.find(params[:id])
  end

  # uupdate method, encapsulate delete' in Form in 'index.html'
  def update
    # Dojo.find(params[:id]).update(dojo_params)
    # redirect_to "/dojos"

    ######## above line do exactly as lines of code below:  ########

     @dojo = Dojo.find(params[:id])

     if @dojo.update(dojo_params)
       redirect_to "/dojos", notice: "You have successfully updated a Dojo!"  #You could've also used "redirect_to 'root_url'" or "redirect_to root_path'
     else
       flash[:errors] = @dojo.errors.full_messages
       redirect_to :back                      #same as "redirect_to /dojos/params[:id]/edit" back to the 'edit' page
     end
   end

  def destroy
    Dojo.find(params[:id]).destroy
    redirect_to "/dojos"
    # render json: params
  end

  private
  def dojo_params
    params.require(:dojo).permit(:branch, :street, :city, :state)
  end

end
