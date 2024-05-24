Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users, defaults: { format: :json }
      # Home
      get 'home', to: 'home#index'
      # Users
      resource :current_user, only: [:show, :update]
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
