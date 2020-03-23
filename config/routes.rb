Rails.application.routes.draw do
  resources :survivors, only:[:index, :show, :create]
  resources :shelters, only:[:index, :show, :create]
  resources :tools,  only:[:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
