Rails.application.routes.draw do
  get "*path", to: "fallback#index",
      constraints: ->(req) { !req.url.include?("/api") && !req.xhr? && req.format.html? }

  namespace :api do
    namespace :v1 do
      # Devise users
      devise_for :users, defaults: { format: :json }
      # Custom users
      resource :current_user, only: [:show, :update]
      # Home
      get 'home', to: 'home#index'
      # Contact form
      resources :messages
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
