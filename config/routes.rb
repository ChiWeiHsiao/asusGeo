Rails.application.routes.draw do
  resources :records

  root :to => 'main#index'
  get 'main/index'

  get 'main/about'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
