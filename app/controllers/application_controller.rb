class ApplicationController < ActionController::API

  protected

  def authenticate_user!
    if request.headers['Authorization'].present?
      authenticate_devise_api_token!
      @current_user = current_devise_api_user
    else
      super
    end
  end

  def verify_authenticity_token
    super if request.headers['Authorization'].blank?
  end
end
