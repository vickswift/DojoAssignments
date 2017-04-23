Rails.application.routes.draw do


  # root 'dojos#index'
  #
  # get 'dojos' => 'dojos#index'
  #
  # post 'dojos' => 'dojos#create'
  #
  # get 'dojos/new' => 'dojos#new'
  #
  # get 'dojos/:id/edit' => 'dojos#edit'
  #
  # get 'dojos/:id' => 'dojos#show'
  #
  # put 'dojos/:id' => 'dojos#update'
  #
  # delete 'dojos/:id' => 'dojos#destroy'

  # Or you could do this and rails will create all your RESTful routes for you
    resources :dojos do
        resources :students
    end
    #
    # resources :students

  # Student routes
  # get 'students/show'
  #
  # get 'students/edit'
  #
  # get 'students/new'
  #
  # get 'dojos/:dojo_id/students/new' => 'students#new'
  #
  # get "dojos/:dojo_id/students/:id/edit" => 'students#edit'
  #
  # get "dojos/:dojo_id/students/:id" => 'students#show'
  #
  # post "dojos/:dojo_id/students" => "students#create"
  #
  # get "/dojos/:dojo_id/students/:id/edit" => "students#edit"
  #
  # post "/dojos/:student_dojo_id/students/:id" => 'students#update'
  #
  # delete "/dojos/:dojo_id/students/:id" => 'students#destroy'

 #  root "dojos#index"
 # resources :dojos do
 #   resources :students
 # end


end
