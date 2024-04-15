Rails.application.routes.draw do
  # API routes should be with prefix api/v1
  namespace :api do
    namespace :v1 do
      devise_for :users
      get 'current_user', to: 'current_user#get'
      resources :quotes
    end
  end

  # root "posts#index"
end
