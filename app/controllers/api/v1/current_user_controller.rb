class Api::V1::CurrentUserController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!

  def get
    if current_devise_api_token
      render json: current_devise_api_user
    else
      render json: { message: 'You are not logged in' }, status: :unauthorized
    end
  end
end