Rails.application.routes.draw do
  get "products/index"
  post "products" => 'products#create'

  root "products#index"
end
