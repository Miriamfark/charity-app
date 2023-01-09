Rails.application.routes.draw do

  resources :recipients, only: [:index, :show, :create]
  resources :donations, only: [:create, :index, :update, :destroy]
  post '/signup', to: "users#create"  
  get '/me', to: "users#show"
  get '/me/recipients', to: "recipients#index"
  get 'me/recipients/:id/donations', to: "users#my_donations"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/highdonations/:amount', to: "donations#high_donations"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
