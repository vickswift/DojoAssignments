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
    resources :dojos

end
