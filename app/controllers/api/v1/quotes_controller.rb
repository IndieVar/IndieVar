class Api::V1::QuotesController < ApplicationController
  before_action :set_quote, only: %i[ update destroy ]
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: %i[create destroy]

  # GET /quotes
  def index
    @quotes = Quote.all

    render json: @quotes
  end

  # GET /quotes/1
  def show
    @quote = Quote.order("RANDOM()").limit(1).first

    render json: @quote
  end

  # POST /quotes
  def create
    @quote = Quote.new(quote_params)

    if @quote.save
      render json: @quote, status: :created, location: @quote
    else
      render json: @quote.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /quotes/1
  def update
    if current_devise_api_user.role == 'admin' && params[:quote].present?
      if @quote.update(quote_params)
        render json: @quote
      end
    elsif @quote.update(views: @quote.views + 1)
    else
      render json: @quote.errors, status: :unprocessable_entity
    end
  end

  # DELETE /quotes/1
  def destroy
    @quote.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_quote
    @quote = Quote.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def quote_params
    params.require(:quote).permit(:en, :ru, :views)
  end
end
