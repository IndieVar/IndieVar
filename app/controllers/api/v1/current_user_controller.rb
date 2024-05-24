class Api::V1::CurrentUserController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_user!

  def get
    render json: @current_user
  end

  def update
    if @current_user.update(user_params)
      render json: @current_user, status: :ok
    else
      render json: @current_user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :avatar, :email, :password, :password_confirmation, :current_password)
  end
end