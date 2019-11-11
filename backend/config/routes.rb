Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/superheros', to: 'superheros#index', as: 'superheros'
  get '/superheros/:id', to: 'superheros#show'
  resources :superheros
end
