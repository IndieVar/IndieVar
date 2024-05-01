Rails.application.routes.draw do
  # API routes should be with prefix api/v1
  namespace :api do
    namespace :v1 do
      devise_for :users
      get 'current_user', to: 'current_user#get'
      resources :quotes
      get 'random_quote', to: 'quotes#random'
      put 'quotes/:id/update_views', to: 'quotes#update_views'
      resources :posts
    end
  end

  # root "posts#index"
end
