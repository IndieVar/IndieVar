class Api::V1::HomeController < ApplicationController

  # GET /home
  def index
    @quote = Quote.order("RANDOM()").limit(1).first

    render json: @quote
  end
end
