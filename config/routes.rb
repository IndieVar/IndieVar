Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Users
      devise_for :users
      get 'current_user', to: 'current_user#get'
      # Quotes
      resources :quotes
      get 'random_quote', to: 'quotes#random'
      put 'quotes/:id/update_views', to: 'quotes#update_views'
      # Posts
      resources :posts
      put 'posts/:id/update_views', to: 'posts#update_views'
    end
  end
end
