Rails.application.routes.draw do
  # API routes should be with prefix api/v1
  namespace :api do
    namespace :v1 do
      devise_for :users
    end
  end

  # root "posts#index"
end
