Rails.application.routes.draw do
  devise_for :admins
  # API routes should be with prefix api/v1
  namespace :api do
    namespace :v1 do

    end
  end

  # root "posts#index"
end
